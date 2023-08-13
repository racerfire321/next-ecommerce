import { NextResponse } from "next/server";
import connect from "@/backend/config/db";
import Product from '@/backend/models/Product';

 

 
export const GET = async (request, { params }) => { 
  try {
    await connect();
  
    const product = await Product.findById(params.id);
    console.log(product)

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};