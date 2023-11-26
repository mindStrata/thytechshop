import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import Pointer from "../Images/Cursors/Pointer.svg";

const Footer = () => {
  return (
    <div className="bg-gray-200 px-4 py-12">
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-2xl font-semibold pb-2">thyTechShop.</h2>
        <p className="text-[14px]">
          Copyright © 2023 shopKaro. All rights reserved.
        </p>
        <div
          className="flex justify-center text-cente space-x-[16px] mt-3 text-2xl "
          style={{ cursor: `url(${Pointer}), pointer` }}
        >
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebook />
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
