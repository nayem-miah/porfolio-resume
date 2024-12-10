import mongoose from "mongoose";

let isConnected = false; // Track connection state to prevent duplicate connections

export async function dbConnect() {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected successfully");
    return conn;
  } catch (err) {
    console.error("Database connection error:", err.message);
    throw new Error("Failed to connect to the database");
  }
}
