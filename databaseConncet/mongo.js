// import mongoose from "mongoose";

// export async function dbConnect() {
//   try {
//     const conn = await mongoose.connect(String(process.env.MONGODB_URI));

//     return conn;
//   } catch (err) {
//     console.error(err);
//   }
// }



import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true, // Keep this to ensure stable connection management
        serverSelectionTimeoutMS: 10000, // 10 seconds timeout
      });
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    }
  }
}
