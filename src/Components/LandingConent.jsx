import React from "react";
import Pointer from "../Images/Cursors/Pointer.svg";
import Cursor from "../Images/Cursors/cursor.png";
import Category1 from "../Images/category1.webp";
import Category2 from "../Images/category3.webp";
import Category3 from "../Images/category2.webp";
import Category4 from "../Images/category4.webp";
import { Link } from "react-router-dom";

const LandingConent = () => {
  return (
    <>
      <div>
        <div
          className={`mt-[70px] px-6 py-4 -z-30 md:cursor-[url(${Cursor}), _pointer]`}
        >
          <div className="flex flex-col justify-center items-center py-20 px-4 lg:px-72 text-center">
            <div className="absolute hidden lg:flex w-40 h-[700px] bg-blue-100 rounded-full -z-50 blur-2xl rotate-45"></div>
            <div className="absolute hidden lg:flex left-60 w-40 h-[600px] bg-yellow-50 rounded-full -z-50 blur-2xl rotate-45"></div>
            <div className="absolute hidden lg:flex right-96 top-20 w-40 h-[500px] bg-green-50 rounded-full -z-50 blur-2xl rotate-45"></div>
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-5xl">
                High-quality tech gadgets & accessories
              </h1>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio accusamus cupiditate aliquid odio et necessitatibus.
              </p>
            </div>
            <div className="flex gap-2 py-3">
              <button
                type="button"
                className="bg-gray-900 border border-gray-400 hover:bg-gray-950 text-white font-medium rounded-full text-sm px-5 py-2"
                style={{ cursor: `url(${Pointer}), pointer` }}
              >
                Browse Product
              </button>
              <Link to={"/signup"}>
                <button
                  type="button"
                  className="border border-gray-400 hover:bg-gray-500 hover:text-white font-medium rounded-full text-sm px-5 py-2"
                  style={{ cursor: `url(${Pointer}), pointer` }}
                >
                  Signup
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 lg:px-24">
            <div className="text-left my-5 text-2xl lg:text-3xl font-medium">
              Categories
            </div>
          </div>
          <div className="p-4 flex overflow-x-auto md:overflow-hidden lg:px-20 lg:justify-center">
            <div className="bg-gray-800 flex justify-center items-center mt-3 rounded-3xl mx-3">
              <div className="flex flex-col w-64 rounded-3xl">
                <div className="bg-gray-200 flex justify-center items-center px-4 py-4 rounded-t-3xl ">
                  <img
                    className=" w-32 h-auto transition-all hover:scale-110 cursor-pointer"
                    src={Category1}
                    alt="product-image"
                    style={{ cursor: `url(${Pointer}), pointer` }}
                  />
                </div>
                <div className="py-6 text-white px-4">
                  <p className="text-[25px] font-normal">Headphones</p>
                  <p className="text-[14px] mt-2">
                    Lorem ipsum dolor sit, amet consectetur. Lorem ipsum dolor
                    sit amet.
                  </p>
                  <div>
                    <button
                      className="px-5 py-1 bg-white text-black rounded-full font-medium mt-4"
                      style={{ cursor: `url(${Pointer}), pointer` }}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 flex justify-center items-center mt-3 rounded-3xl mx-3">
              <div className="flex flex-col w-64 rounded-3xl">
                <div className="bg-gray-200 flex justify-center items-center px-4 py-4 rounded-t-3xl ">
                  <img
                    className=" w-32 h-auto transition-all hover:scale-110 cursor-pointer"
                    src={Category2}
                    alt="product-image"
                    style={{ cursor: `url(${Pointer}), pointer` }}
                  />
                </div>
                <div className="py-6 text-white px-4">
                  <p className="text-[25px] font-normal">Speaker</p>
                  <p className="text-[14px] mt-2">
                    Lorem ipsum dolor sit, amet consectetur. Lorem ipsum dolor
                    sit amet.
                  </p>
                  <div>
                    <button
                      className="px-5 py-1 bg-white text-black rounded-full font-medium mt-4"
                      style={{ cursor: `url(${Pointer}), pointer` }}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 flex justify-center items-center mt-3 rounded-3xl mx-3">
              <div className="flex flex-col w-64 rounded-3xl">
                <div className="bg-gray-200 flex justify-center items-center px-4 py-4 rounded-t-3xl ">
                  <img
                    className=" w-32 h-auto transition-all hover:scale-110 cursor-pointer"
                    src={Category3}
                    alt="product-image"
                    style={{ cursor: `url(${Pointer}), pointer` }}
                  />
                </div>
                <div className="py-6 text-white px-4">
                  <p className="text-[25px] font-normal">Earbuds</p>
                  <p className="text-[14px] mt-2">
                    Lorem ipsum dolor sit, amet consectetur. Lorem ipsum dolor
                    sit amet.
                  </p>
                  <div>
                    <button
                      className="px-5 py-1 bg-white text-black rounded-full font-medium mt-4"
                      style={{ cursor: `url(${Pointer}), pointer` }}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 flex justify-center items-center mt-3 rounded-3xl mx-3">
              <div className="flex flex-col w-64 rounded-3xl">
                <div className="bg-gray-200 flex justify-center items-center px-4 py-4 rounded-t-3xl ">
                  <img
                    className=" w-32 h-auto transition-all hover:scale-110 cursor-pointer"
                    src={Category4}
                    alt="product-image"
                    style={{ cursor: `url(${Pointer}), pointer` }}
                  />
                </div>
                <div className="py-6 text-white px-4">
                  <p className="text-[25px] font-normal">Smart Watch</p>
                  <p className="text-[14px] mt-2">
                    Lorem ipsum dolor sit, amet consectetur. Lorem ipsum dolor
                    sit amet.
                  </p>
                  <div>
                    <button
                      className="px-5 py-1 bg-white text-black rounded-full font-medium mt-4"
                      style={{ cursor: `url(${Pointer}), pointer` }}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingConent;
