import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    number: {
      type: String,
      
    },
    avatar: {
      type: String,
      
    },
    unit: {
      type: String,
      
    },
    slot: {
      type: String,
      
    },
    slotCell: {
      type: String,
      
    },
    role: {
    type: String,
    default: "user",
  },
    password: {
      type: String,
      
    },
  },
  { timestamps: true }
);


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User
