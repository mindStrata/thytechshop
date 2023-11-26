import React from "react";
import Pointer from "../Images/Cursors/Pointer.svg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const LoginPage = () => {
  return (
    <div>
      <header className="bg-gray-950">
        <div className="p-4 text-white text-xl font-medium">
          <Link to={"/"} style={{ cursor: `url(${Pointer}), pointer` }}>
          thyTechShop.
          </Link>
        </div>
      </header>
      <div className="px-4 my-36 lg:my-5">
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
      <Footer />
    </div>
  );
};

export default LoginPage;
