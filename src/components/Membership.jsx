import React from "react";

const Membership = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full py-32 px-4 md:px-16">
      <h1 className="text-4xl font-extrabold underline text-accent pb-16 md:text-5xl">
        MEMBERSHIP
      </h1>
      <div className="flex flex-col gap-12 md:gap-20 md:flex-row   w-full">
        <div className="bg-gray-100 p-8 w-full rounded-lg border-4 border-solid border-gray-900 text-accent">
          <p className="text-4xl font-extrabold underline">PLATINUM</p>
          <p className="text-3xl font-extrabold pt-4">£9.99</p>
          <p className="text-2xl font-bold py-4">Per Month</p>
          <p className="text-xl">Book all available session</p>
          <button className="bg-primary mt-3 text-white py-2 px-4 rounded-md font-bold  w-64">
            Subscribe Now
          </button>
        </div>
        <div className="bg-gray-100 p-8 w-full rounded-lg border-4 border-solid border-green-700 text-accent">
          <p className="text-4xl font-extrabold underline ">DIAMOND</p>
          <p className="text-3xl font-extrabold pt-4">£99.99</p>
          <p className="text-2xl font-bold py-4">Per Year</p>
          <p className="text-xl">Book all available session</p>
          <button className="bg-primary mt-3 text-white py-2 px-4 rounded-md font-bold  w-64">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
