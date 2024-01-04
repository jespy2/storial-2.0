import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

import { connectToDatabase } from './service/database.services';
import { authRouter, bookRouter } from './routes';
const app = express();
const apiPort = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:3000', 'https://jamesespy.com/storial/'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

connectToDatabase()
  .then(() => {
    app.use('/auth', authRouter);
    app.use('/api', bookRouter);

    app.listen(apiPort, () => console.log(`🤖 Server running on port ${apiPort} 🚀`));
  })
  .catch((error: Error) => {
    console.log("Database connection failed", error)
  });