import User from '../../../../models/User'
import connectDb from "../../../../utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, number, password } = await request.json();

  await connectDb();

  const existingUser = await User.findOne({ email });
    if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    number,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      
    });
  }
};
