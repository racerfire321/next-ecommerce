
import Link from 'next/link'

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
           {products && products.map((item)=>(

          
          <section className="py-12">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="flex flex-col md:flex-row -mx-4">
             
                    
                <main className="md:w-2/3 lg:w-3/4 px-3">
                  <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 flex p-3">
                        <div
                          style={{
                            width: "80%",
                            height: "70%",
                            position: "relative",
                          }}
                        >
                          <img
                            src={item.img}
                            alt="product anme"
                            height="240"
                            width="240"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/4">
                        <div className="p-4">
                          <Link href={`/`} className="hover:text-blue-600">
                           {item.name}
                          </Link>
                          <div className="flex flex-wrap items-center space-x-2 mb-2">
                            <div className="ratings">
                              <div className="my-1">
                                
                              </div>
                            </div>
                            <b className="text-gray-300">•</b>
                            <span className="ml-1 text-yellow-500">5</span>
                          </div>
                          <p className="text-gray-500 mb-2">
                           {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <div className="p-5">
                          <span className="text-xl font-semibold text-black">
                            {item.price}
                          </span>
    
                          <p className="text-green-500">Free Shipping</p>
                          <div className="my-3">
                            <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                              {" "}
                              Add to Cart{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </section>
          ))}

        </>
     
      );
     

  
}

export default ListProducts