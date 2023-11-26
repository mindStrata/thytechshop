import React from "react";
import Navbar from "../Components/Navbar";
import LandingConent from "../Components/LandingConent";
import ShowProduct from "../Components/ShowProduct";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LandingConent />
      <ShowProduct />
      <Footer />
    </>
  );
};

export default HomePage;
