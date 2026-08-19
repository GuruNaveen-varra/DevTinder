import "dotenv/config";
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;
export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.error(`Database connection error :${error}`);
  }
};
