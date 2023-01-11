import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDb = async () => {
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI);
  } else {
    throw Error('Missing or undefined MONGODB_URI parameter');
  }
};

const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
});

db.once('connected', () => {
  console.log('Database connected');
});

export default connectDb;
