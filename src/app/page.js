import ListProducts from '@/components/products/ListProduct'
import React from 'react'

async function getData() {
 
  try {
    const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });

    if (!res.ok) {
      console.error('Failed to fetch data');
      return;
    }

  return await res.json();
  
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const Home = async () => {
  
     const products = await getData();

  return <ListProducts data={products} />;
     
}

export default Home