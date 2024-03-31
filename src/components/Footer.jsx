import React from "react";
import Logo from "../assets/logo5.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div name="footer" className="w-full  bg-black p-4 text-white md:px-16">
      <div className="grid layout gap-12 place-items-center py-8 justify-center w-full md:flex md:justify-between">
        <div className="">
          <img className="w-52 h-6.24" src={Logo} alt="logo" />
        </div>
        <div className="flex gap-2 justify-center items-center gfont-bold">
          <FaPhoneSquareAlt size={30} />
          <p className="text-lg">07012345678</p>
        </div>
        <div className="">
          <ul className="flex text-white ">
            <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0 ">
              <FaFacebookSquare size={40} />
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
              <FaTwitterSquare size={40} />
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
              <FaInstagramSquare size={40} />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-center text-gray-400 md:mx-8">
        &#169; 2024 EggMonkey. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
