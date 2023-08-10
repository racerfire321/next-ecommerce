import ListProducts from '@/components/products/ListProduct'
import React from 'react'

const Home = () => {
  return (
    <div>
     <div>
      <h1 className="text-center">Welcome to the homepage</h1>
      <ListProducts/>
     </div>
    </div>
  )
}

export default Home