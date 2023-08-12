
import ProductDetails from '@/components/products/ProductDetails';
import React from 'react';

async function GET(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });

    if (!res.ok) {
      console.log("Data not found");
    }

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      return json;
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      console.log("Response content:", text);
      return null;
    }
  } catch (fetchError) {
    console.error("Error fetching data:", fetchError);
    return null;
  }
  
}


const ProductDetailsPage = async({ params }) => {
  
    const product = await GET(params.id)

  return <ProductDetails product={product} />
  
};

export default ProductDetailsPage;
