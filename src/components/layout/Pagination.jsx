'use client'
import React from 'react'
import Pagination from 'react-js-pagination'
import { useRouter,useSearchParams } from 'next/navigation'



const CustomPagination = ({resPerPage, ProductCount}) => {
   const router = useRouter();
   const searchParams = useSearchParams();
   let page = searchParams.get("page") || 1;
   page = Number(page); 
   let queryParams;
   const handlePageChange = (currentPage) =>{
       if (typeof window !=='undefined'){
        queryParams = new URLSearchParams(window.location.search)
        if(queryParams.has('page')){

            queryParams.set('page',currentPage)
        }else{
            queryParams.append('page', currentPage )
        }
        const path = window.location.pathname + "?" + queryParams.toString()
        console.log('path',path)
        router.push(path);
       }
   }
   return (
    <div className='flex mt-20 justify-center '>
        <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemCount={ProductCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass='relative inline-flex item-center border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
        activelinkClassName='z-10 inline-flex item-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20'
        activeClass='z-10 inline-flex item-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo focus:z-20'
        >


        </Pagination>
        </div>
  )
}

export default CustomPagination