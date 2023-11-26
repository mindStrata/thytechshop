import React from "react";
import ProductSkeleton from "./ProductSkeleton";
import { IoIosArrowRoundForward } from "react-icons/io";
import Product from "./Data/Product";
import Pointer from "../Images/Cursors/Pointer.svg";

const ShowProduct = () => {
  return (
    <div className="Products">
      {/* Show headphone products */}
      <div className="flex items-center justify-between px-6 lg:px-24 py-3">
        <div className="text-left text-2xl lg:text-3xl font-medium">
          Headphones
        </div>
        <div
          className="flex text-indigo-800 items-center"
          style={{ cursor: `url(${Pointer}), pointer` }}
        >
          More product <IoIosArrowRoundForward size={20} />
        </div>
      </div>
      <div className="p-4 flex overflow-x-auto md:overflow-hidden scrollbar-thin lg:px-10 lg:justify-center sm:flex-wrap">
        {Product[0].headphones.map((product) => (
          <ProductSkeleton
            key={product.id}
            image={product.image}
            title={product.title.substring(0, 40)}
            description={product.description.substring(0, 40)}
            price={product.price}
          />
        ))}
      </div>
      {/* Show Speaker products */}
      <div className="flex items-center justify-between px-6 lg:px-24 py-3">
        <div className="text-left text-2xl lg:text-3xl font-medium">
          Speakers
        </div>
        <div
          className="flex text-indigo-800 items-center"
          style={{ cursor: `url(${Pointer}), pointer` }}
        >
          More product <IoIosArrowRoundForward size={20} />
        </div>
      </div>
      <div className="p-4 flex overflow-x-auto md:overflow-hidden scrollbar-thin lg:px-10 lg:justify-center sm:flex-wrap">
        {Product[1].speakers.map((product) => (
          <ProductSkeleton
            key={product.id}
            image={product.image}
            title={product.title.substring(0, 40)}
            description={product.description.substring(0, 40)}
            price={product.price}
          />
        ))}
      </div>
      {/* Show earbud products */}
      <div className="flex items-center justify-between px-6 lg:px-24 py-3">
        <div className="text-left text-2xl lg:text-3xl font-medium">
          Earbuds
        </div>
        <div
          className="flex text-indigo-800 items-center"
          style={{ cursor: `url(${Pointer}), pointer` }}
        >
          More product <IoIosArrowRoundForward size={20} />
        </div>
      </div>
      <div className="p-4 flex overflow-x-auto md:overflow-hidden scrollbar-thin lg:px-10 lg:justify-center sm:flex-wrap">
        {Product[2].earbuds.map((product) => (
          <ProductSkeleton
            key={product.id}
            image={product.image}
            title={product.title.substring(0, 40)}
            description={product.description.substring(0, 40)}
            price={product.price}
          />
        ))}
      </div>
      {/* Show smart watch products */}
      <div className="flex items-center justify-between px-6 lg:px-24 py-3">
        <div className="text-left text-2xl lg:text-3xl font-medium">
          Smart Watch
        </div>
        <div
          className="flex text-indigo-800 items-center"
          style={{ cursor: `url(${Pointer}), pointer` }}
        >
          More product <IoIosArrowRoundForward size={20} />
        </div>
      </div>
      <div className="p-4 flex overflow-x-auto md:overflow-hidden scrollbar-thin lg:px-10 lg:justify-center sm:flex-wrap">
        {Product[3].smartWatch.map((product) => (
          <ProductSkeleton
            key={product.id}
            image={product.image}
            title={product.title.substring(0, 40)}
            description={product.description.substring(0, 40)}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowProduct;
