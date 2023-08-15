import { NextResponse } from 'next/server';
import connect from '@/backend/config/db';
import Product from '@/backend/models/Product';
import APIFilters from '@/utils/APIFilters';

export const getProducts = async (req, res) => {
  await connect();
  const resPerPage = 3;
  const ProductCount = await Product.countDocuments();

  const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFilters.query;
  const filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);

  products = await apiFilters.query.clone();

 return res.status(200).json({
    ProductCount,
    resPerPage,
    filteredProductsCount,
    products,
  });
};
export const GET = async () => {
  await connect();
  const products = await Product.find();
  return NextResponse.json({ products });
}
export const POST = async (request) => {
  const data = await request.json();
  await connect();
  console.log(data);
  await Product.create(data);
  return NextResponse.json({ message: 'Product Created' }, { status: 201 });
};
