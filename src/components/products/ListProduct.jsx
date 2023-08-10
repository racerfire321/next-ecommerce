
import Link from 'next/link'
import Filter from '../layout/Filter';
import ProductItem from './ProductItem';

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

const ListProducts = async() => {
  

   const {products} = await getData()
  
    
    return (
      
        <>
         

          
          <section className="py-12">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="flex flex-col md:flex-row -mx-4">
             <main className="md:w-2/3 lg:w-3/4 px-3">
              {products && products.map((products)=>(
                
                  <ProductItem key={products?._id} product={products} />
            ))}
                </main>
              </div>
            </div>
          </section>
          

        </>
     
      );
     

  
}

export default ListProducts