"use server"
import Property from "@/models/Property";
import connectDb from "@/utils/db";
import { revalidatePath } from 'next/server';
import { NextResponse } from 'next/server'
export async function fetchProperty() {
  try {
    await connectDb();

      const propertyQuery = Property.find({})
      

      const property = await propertyQuery.exec();

      return property

  } catch (error) {
    throw new Error(`Failed to fetch property: ${error.message}`);
  }
}
export async function fetchAdminProperty() {
  try {
    await connectDb();

      const propertyQuery = Property.find({}).populate('author')
      

    const property = await propertyQuery.exec();
    await revalidatePath('/admin/*');

      return property

  } catch (error) {
    throw new Error(`Failed to fetch property: ${error.message}`);
  }
}

export async function fetchSingleProperty(id) {
  try {
    await connectDb();
    const property = await Property.findById(id).exec()
    await revalidatePath('/property/*');
    return property;
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}


export async function createProperty(body) {
  connectDb()
  try {
    const newProperty = await Property.create(body)
    await revalidatePath('/property/*');
    await revalidatePath('/admin/*');
    await revalidatePath('/property-description/*');
    return newProperty
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}


export async function updateProperty(body, id) {
  connectDb()
  try {
    
    let updatedProperty = await Property.findByIdAndUpdate({ _id: id }, body);
    await revalidatePath('/property/*');
    await revalidatePath('/admin/*');
    await revalidatePath('/property-description/*');
        console.log(updatedProperty);
    console.log(body)
    console.log(`id ${id}`)
    console.log(updatedProperty);
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function fetchOnePropertyPerLocation() {
   connectDb()
  try {
    // Create the aggregation pipeline
    const pipeline = [
      {
        $group: {
          _id: "$location",
          firstProperty: { $first: "$$ROOT" },
        },
      },
    ];

    // Execute the aggregation pipeline
    const property = await Property.aggregate(pipeline);

    // Return the property
    return property;
  } catch (error) {
    throw new Error(`Failed to fetch property: ${error.message}`);
  }
}


export async function fetchClientProperty() {
  try {
    await connectDb();

      const propertyQuery = Property.find({}).populate('author')
      

      const property = await propertyQuery.exec();

    return new NextResponse(JSON.stringify(property), { status: 200 })

  } catch (error) {
    throw new Error(`Failed to fetch property: ${error.message}`);
  }
}

export async function fetchSearchProperties(searchParam) {
  try {
    await connectDb();

    // If the search parameter is empty, return all properties.
    if (searchParam === "") {
      const properties = await Property.find({}).exec();
      return properties;
    }

    // Otherwise, query for properties that match the search parameter.
    const properties = await Property.find({
      location: { $regex: new RegExp(searchParam, "i") },
      
    }).exec();

    return properties;
  } catch (error) {
    throw new Error(`Failed to fetch properties: ${error.message}`);
  }
}