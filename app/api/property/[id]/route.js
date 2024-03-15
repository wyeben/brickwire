import connectDb from "../../../../utils/db";
// import { verifyJwtToken } from '@/lib/jwt'
import Property from "../../../../models/Property";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";


export async function GET(req, ctx) {
  
    await connectDb()
    const id = ctx.params.id
  try {
    const property = await Property.findById(id)
    // await revalidatePath('/admin/*');
    return new NextResponse(JSON.stringify(property), { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({
      message: "An error occurred while fetching this property.",
      error,
    }), { status: 500 })
  }
}




export async function PATCH(req, ctx) {
  await revalidatePath('/admin/*');
    await connectDb()
    const id = ctx.params.id
    try {
      const body = await req.json
        const updatedProperty = await Property.findOneAndUpdate(id, { $set: { ...body } }, { new: true }, { upsert: true })
        return new NextResponse(JSON.stringify(updatedProperty), { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({
      message: "An error occurred while updating this property.",
      error,
    }), { status: 500 })
  }
}


export async function DELETE(req, ctx) {
  await revalidatePath('/admin/*');
    await connectDb()
    const id = ctx.params.id
    try {
    const property = await Property.findById(id)
        await Property.findByIdAndDelete(id)
        return new NextResponse(JSON.stringify({
      message: "Successfully deleted property."
    }), { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({
      message: "An error occurred while updating this property.",
      error,
    }), { status: 500 })
  }
}
