import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Product from '@/backend/models/Product';

export const GET = async () => {
  await connect();
  const products = await Product.find();
  return NextResponse.json({ products });
};

export const POST = async (request) => {
  const data = await request.json();
  await connect();
  console.log(data);
  await Product.create(data);
  return NextResponse.json({ message: 'Product Created' }, { status: 201 });
};
