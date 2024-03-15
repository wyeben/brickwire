import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

const connectDb = async () => {
  mongoose.set("strictQuery", true);



  if (!process.env.MONGO) return console.log("Missing MongoDB URL");

   if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO);
    
    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log('database not connected')
  }
};
export default connectDb;


