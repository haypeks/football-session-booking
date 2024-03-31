import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo5.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Find Sessions",
    },

    {
      id: 2,
      link: "About Us",
    },

    {
      id: 3,
      link: "Membership",
    },

    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center z-50  w-full py-4 px-4 md:px-16 bg-accent fixed">
      <motion.div
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.1,
          duration: 1.5,
          type: "spring",
          stiffness: 30,
        }}
      >
        <Link to="/">
          <img className="w-32 h-6.24" src={Logo} alt="" />
        </Link>
      </motion.div>
      <div className="flex gap-4">
        <ul className="hidden sm:flex justify-between items-center  text-white">
          {links.map(({ id, link, href }) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer text-lg hover:scale-110 duration-200 "
            >
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
        <button className="bg-primary px-3 text-white rounded-md font-bold -mr-2 sm:mr-0">
          <Link to="/signin">Sign in</Link>
        </button>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 sm:hidden"
        >
          {nav ? (
            <FaTimes size={30} className="text-white" />
          ) : (
            <FaBars size={30} className="text-white" />
          )}
        </div>
        {nav && (
          <ul className="flex flex-col  gap-8 justify-center items-center absolute top-0 left-0 w-full h-50 mt-14 bg-primary py-8 text-white">
            {links.map(({ id, link, href }) => (
              <li
                key={link.id}
                className="px-4  cursor-pointer text-lg font-bold text-white hover:scale-110 duration-200 "
              >
                <a href={href}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
