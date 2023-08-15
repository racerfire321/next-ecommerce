import React from "react";
import {FaAngleRight} from "react-icons/fa";
import Link from "next/link";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <section className="py-5 sm:py-7 bg-blue-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          {breadCrumbs?.map((breadCrumb, index) => (
            <li className="inline-flex items-center">
              <Link
                href={breadCrumb.url} 
                className="text-gray-600 hover:text-blue-600"
              >
              {breadCrumb.name}{<FaAngleRight className='inline-flex'/>} 
              </Link>
              {breadCrumbs?.length - 1 !== index && (
                <i className="ml-1 text-gray-400 fa fa-chevron-right"></i>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;