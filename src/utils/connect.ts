import dotenv from "dotenv";
import { type Express } from "express";
import mongoose from "mongoose";

dotenv.config();

const PORT = 3000;

// connection string do MongoDB
export async function connectDB(app: Express): Promise<void> {
  try {
    const databaseUrl = process.env?.MONGODB_ENDPOINT;

    if (databaseUrl === undefined) {
      throw new Error("Database URL not found");
    }

    await mongoose.connect(databaseUrl);
    app.listen(PORT, () => {
      console.log(`Connected to db. Listening on port ${PORT}`);
    });
  } catch (e) {
    console.log("Error connecting to db:", e);
    process.exit(1);
  }
}
