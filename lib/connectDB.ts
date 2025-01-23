import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI){
  throw new Error("MONGODB_URI is not set in the environment variables")
}

const connectDB = async () => {
 try{
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");
 }catch(error){
  console.error("Error connecting to MongoDB:", error);
 }
};

export default connectDB;