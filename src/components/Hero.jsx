import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-background h-screen w-full md:px-16">
      <div className="flex flex-col justify-center  items-center md:items-start h-full px-6">
        <h1 className="text-4xl text-center leading-32 text-black font-black text-accent md:text-6xl ">
          CASUAL FOOTY
        </h1>
        <p className=" py-3 text-md md:text-lg text-gray-400 md:w-64 text-center md:text-left">
          From beginners to legends, whether you're galactico or just built like
          an egg, you will fit right in
        </p>

        <Link
          to="/profile"
          className="bg-primary px-6 py-2 text-white text-xl rounded mb-96 md:mb-0 font-bold -mr-2 sm:mr-0"
        >
          Play Football
        </Link>
      </div>
    </div>
  );
};

export default Hero;
