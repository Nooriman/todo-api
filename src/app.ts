import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import mongoose from "mongoose";

dotenv.config();

const app: Application = express();
const MONGODB_URI = process.env.MONGODB_URI!;

app.use(express.json());


mongoose
  .connect(MONGODB_URI)
  .then((res) => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on: ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
