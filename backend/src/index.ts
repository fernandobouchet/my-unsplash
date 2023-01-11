import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import connectDb from './database/db';
import imageRouter from './routes/imageRoute';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use('/api', imageRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
