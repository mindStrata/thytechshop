import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Pointer from "../Images/Cursors/Pointer.svg";
import Cursor from "../Images/Cursors/cursor.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [isAuthenticated, setIsAuthnenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div style={{ cursor: `url(${Cursor}), pointer` }}>
        <nav className="flex justify-between items-center px-12 py-4 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full top-0">
          <div className="flex">
            <div className="flex items-center justify-center">
              <span
                className="font-semibold text-xl sm:text-xl lg:text-2xl"
                style={{ cursor: `url(${Pointer}), pointer` }}
              >
                thyTechShop.
              </span>
            </div>
            <div className="sm:flex items-center justify-evenly md:space-x-4 md:px-5 hidden">
              <div>
                <a
                  href=""
                  className="flex items-center font-medium hover:bg-gray-900 hover:text-white px-1.5 py-0.5 rounded-full"
                  style={{ cursor: `url(${Pointer}), pointer` }}
                >
                  <span
                    className="flex group items-center"
                    onMouseEnter={() => setIsMouseEntered(true)}
                  >
                    Categories{" "}
                    <IoIosArrowDown
                      className={`${
                        isMouseEntered &&
                        `hover:transform hover:transition hover:delay-150 hover:rotate-180`
                      }`}
                    />
                    <div className="active:flex absolute top-20 left-5 bg-red-700 group-hover:flex w-30 h-80"></div>
                  </span>
                </a>
              </div>
              <div>
                <div className="flex items-center bg-gray-100 py-1.5 rounded-lg gap-2 px-12 md:px-3">
                  <IoSearch size={"20px"} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="focus:outline-none w-[150px] lg:w-80 placeholder:text-gray-600 bg-gray-100 h-[20px] border-none focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-center items-center space-x-4 hidden">
            <span
              className="flex"
              onClick={() => setIsCartOpen(true)}
              style={{ cursor: `url(${Pointer}), pointer` }}
            >
              <IoCartOutline
                size={"20px"}
                onClick={() => {
                  if (!isAuthenticated) {
                    setShowModal(true);
                  }
                }}
              />
              <sup className="relative bg-gray-900 left-[-6px] text-white rounded-lg w-4 h-4 flex justify-center items-center">
                9
              </sup>
            </span>
            <div className="flex flex-row space-x-4">
              <Link to={"/login"}>
                <button
                  type="button"
                  className="border border-gray-400 hover:bg-gray-500 hover:text-white font-medium rounded-lg text-sm px-2 py-1 md:px-5 md:py-2"
                  style={{ cursor: `url(${Pointer}), pointer` }}
                >
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 border border-gray-400  hover:text-white font-medium rounded-lg text-sm px-2 py-1 md:px-5 md:py-2"
                  style={{ cursor: `url(${Pointer}), pointer` }}
                >
                  Create account
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:hidden flex space-x-3 justify-center items-center">
            <span className="flex">
              <IoCartOutline
                size={"20px"}
                style={{ cursor: `url(${Pointer}), pointer` }}
                onClick={() => {
                  setIsCartOpen(true);
                  setIsClicked(false);
                  if (!isAuthenticated) {
                    setShowModal(true);
                  }
                }}
              />
              <sup className="relative bg-gray-900 left-[-6px] text-white rounded-lg w-4 h-4 flex justify-center items-center">
                9
              </sup>
            </span>

            <p style={{ cursor: `url(${Pointer}), pointer` }}>
              {isClicked ? (
                <RxCross2
                  size={"26px"}
                  onClick={() => setIsClicked(!isClicked)}
                />
              ) : (
                <HiOutlineBars2
                  size={"26px"}
                  className={`transform transition-transform ${
                    isClicked && `rotate-180`
                  }`}
                  onClick={() => {
                    setIsClicked(!isClicked);
                    setIsCartOpen(false);
                  }}
                />
              )}
            </p>
          </div>
          <div
            className={`flex sm:flex w-[100vw] h-[100vh] sm:w-[352px] sm:h-[100vh] bg-white  absolute top-[60px] lg:top-[68px] right-0 transform transition ease-out delay-200 inset-y-0 ${
              isCartOpen && isAuthenticated
                ? `translate-x-0 shadow-xl shadow-slate-400 `
                : `translate-x-full`
            } px-2 py-2`}
          >
            <div className="">
              <div>
                <RxCross2
                  size={"34px"}
                  className="px-1 py-1 border-2 border-transparent hover:border-2 hover:border-gray-400 rounded-lg"
                  onClick={() => setIsCartOpen(false)}
                  style={{ cursor: `url(${Pointer}), pointer` }}
                />
              </div>
              <h1 className="text-xl font-bold p-10">NO CONTENT</h1>
              <div className="absolute bottom-20 flex justify-center w-full px-5">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 border border-gray-400  hover:text-white font-medium rounded-lg text-sm px-2 py-2 md:px-5 md:py-2 w-full"
                  style={{ cursor: `url(${Pointer}), pointer` }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div
            className={`absolute top-[60px] left-0 w-full h-64 inset-0 bg-white sm:hidden border-t-gray-900 shadow-lg transition-all ${
              isClicked || `hidden`
            }`}
          >
            <div className="flex flex-col justify-start items-center text-center px-6 space-y-4">
              <div className="font-semibold mt-8 space-y-3">
                <p>About Us</p>
                <p>Company</p>
                <p>Support & help</p>
              </div>
              <div className="flex w-full">
                <Link to={"/login"} className="flex w-full">
                  <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 border border-gray-400  hover:text-white font-medium rounded-lg text-sm px-5 py-2 border-t-gray-900 w-full"
                    style={{ cursor: `url(${Pointer}), pointer` }}
                  >
                    Login to account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-30 rounded-xl`}
      >
        <div className="relative p-8 w-auto max-w-2xl mx-auto my-20 md:my-3">
          <div className="bg-white rounded p-5">
            <span className="flex justify-end">
              <RxCross2
                size={28}
                className="border-2 border-dashed border-white hover:border-gray-500 p-1 rounded-lg"
                style={{ cursor: `url(${Pointer}), pointer` }}
                onClick={() => setShowModal(false)}
              />
            </span>
            <div className="px-4 ">
              <div className="flex justify-center items-center py-5">
                <div>
                  <div className="flex flex-col justify-center">
                    <h1 className="flex justify-center text-2xl font-medium mb-5">
                      thyTechShop.
                    </h1>
                    <p className="text-gray-900 font-semibold text-xl">
                      Welcome Back! 👋
                    </p>
                  </div>
                  <div className="py-2">
                    <div
                      className="border-2 w-full rounded-xl py-[7px] border-gray-200 flex justify-center items-center gap-2"
                      style={{ cursor: `url(${Pointer}), pointer` }}
                    >
                      <p className="flex items-center gap-2">
                        <FcGoogle size={27} /> login with google
                      </p>
                    </div>
                    <div className="py-3">
                      <p className="relative top-[11px] flex justify-center">
                        <span className="bg-white px-4">or</span>
                      </p>
                      <hr className="border-gray-400" />
                    </div>
                    <form>
                      <div className="w-full pt-3">
                        <label htmlFor="email" className="font-medium">
                          Email address
                        </label>
                        <br />
                        <input
                          className="rounded-xl w-full lg:w-[380px]"
                          type="email"
                          placeholder="example@domain.com"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="password" className="font-medium">
                          Password
                        </label>
                        <br />
                        <input
                          className="rounded-xl w-full"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="text-white bg-gray-950 hover:bg-gray-900 border border-gray-400  hover:text-white font-medium rounded-xl text-sm px-2 py-3 md:px-5 md:py-2 w-full"
                          style={{ cursor: `url(${Pointer}), pointer` }}
                        >
                          Login
                        </button>
                      </div>
                      <p className="mt-3">
                        Don't have an account?{" "}
                        <Link
                          to={"/signup"}
                          className="underline"
                          style={{ cursor: `url(${Pointer}), pointer` }}
                        >
                          signup
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
