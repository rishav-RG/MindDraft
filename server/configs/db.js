// config/db.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MongoDB URI is not defined in environment variables");
}

// ✅ Global cache to avoid multiple connections on Vercel
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
      maxPoolSize: 10, // Limit concurrent connections
      minPoolSize: 5, // Maintain minimum connections
      socketTimeoutMS: 45000, // Close sockets after 45 seconds
    };

    cached.promise = mongoose.connect(MONGODB_URI, options);
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected successfully");
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
