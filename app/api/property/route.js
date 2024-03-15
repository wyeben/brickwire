import connectDb from "../../../utils/db";
// import { verifyJwtToken } from '@/lib/jwt'
import Property from "../../../models/Property";
import { NextResponse } from "next/server";
import { revalidatePath } from 'next/server';

export async function POST(req) {
   
    await connectDb()

    try {
      const body = await req.json()
      
        const newProperty = await Property.create(body)
      await revalidatePath('/admin/*');
        return new NextResponse(JSON.stringify(newProperty), { status: 200 })
    } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({
      message: "An error occurred while creating property.",
      error,
    }), { status: 500 })
  }
}

export async function GET(req) {
  await revalidatePath('/admin/*');
  await connectDb()
  try {
    const properties = await Property.find({}).populate("author")
    return new NextResponse(JSON.stringify(properties), { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({
      message: "An error occurred while fetching property.",
      error,
    }), { status: 500 })
  }
}
