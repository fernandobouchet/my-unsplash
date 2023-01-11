import 'dotenv/config';
import express from 'express';
import connectDb from './database/db';

const port = process.env.port || 3000;
const app = express();

app.use(express.json());

connectDb();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
