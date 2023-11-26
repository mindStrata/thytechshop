import React from "react";
import Pointer from "../Images/Cursors/Pointer.svg";

const ProductSkeleton = ({ title, image, description, price }) => {
  return (
    <div className="flex justify-center items-center mt-3 px-3">
      <div
        className="flex flex-col w-64 px-4 py-3 rounded-3xl"
        style={{ cursor: `url(${Pointer}), pointer` }}
      >
        <div className="bg-gray-200 flex justify-center items-center px-4 py-4 rounded-2xl ">
          <img
            className=" w-32 h-auto transition-all hover:scale-110"
            style={{ cursor: `url(${Pointer}), pointer` }}
            src={image}
            alt="product-image"
          />
        </div>
        <div className="py-4">
          <p className="text-[16px] font-medium">{title}</p>
          <p className="text-sx text-gray-700">{description}...</p>
          <p className="text-lg font-bold mt-3">{price} USD</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
