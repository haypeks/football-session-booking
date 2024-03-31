import React, { useState } from "react";
import egg from "../assets/eggsmall.png";
import football from "../assets/footballicon.png";

const Profile = () => {
  const [inputValue, setInputValue] = useState(4);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [error, setError] = useState("");

  /*
  const levelDescription = {
    1: "Beginner",
    2: "Not bad but need exercise",
    3: "Fairly Good",
    4: "Excellent",
    5: "Champions League Legend",
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age.length < 2) {
      setError("Age must be at least two digits");
      return;
    }

    if (contactNumber.length !== 11) {
      setError("Contact number must be 11 digits");
      return;
    }
  };

  console.log({ inputValue });

  return (
    <div className="other-bg bg-cover bg-center py-32 px-4 min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className=" w-full bg-white p-8 rounded-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Complete your profile</h2>
            <img src={football} alt="football" className="w-7" />
          </div>
          <hr className="my-4" />
          <div className="font-semibold  pb-8 text-lg">Your experience:</div>
          <div className="range-col flex items-center">
            <input
              type="range"
              min="1"
              max="5"
              value={inputValue}
              step="1"
              onChange={(e) => setInputValue(parseInt(e.target.value))}
              className="w-52
               transform -rotate-90 invert-0 origin-center -ml-24"
            />
            <div className="flex flex-col gap-6 -ml-16">
              <div
                id="level5"
                className={
                  inputValue === 5 ? "font-bold text-green-800" : "font-normal"
                }
              >
                5. Champions League L
                <img
                  src={egg}
                  className="w-6 mb-0.5 inline"
                  alt="egg-graphics"
                />
                end
              </div>

              <div
                id="level4"
                className={
                  inputValue === 4 ? "font-bold text-lime-500" : "font-normal"
                }
              >
                4.
                <img
                  src={egg}
                  className="w-6 mb-0.5 inline"
                  alt="egg-graphics"
                />
                celent
              </div>

              <div
                id="level3"
                className={
                  inputValue === 3 ? "font-bold text-gray-900" : "font-normal"
                }
              >
                3. Fairly G
                <img
                  src={football}
                  className="w-4 px-0.5 mb-1 inline"
                  alt="football"
                />
                <img
                  src={football}
                  className="w-4  px-0.5  mb-1 inline"
                  alt="football"
                />
                d
              </div>

              <div
                id="level2"
                className={
                  inputValue === 2 ? "font-bold text-orange-500" : "font-normal"
                }
              >
                2. Not bad but need
                <img
                  src={egg}
                  className="w-6 mb-0.5 inline"
                  alt="egg-graphics"
                />
                sercize
              </div>

              <div
                id="level1"
                className={
                  inputValue === 1 ? "font-bold text-orange-800" : "font-normal"
                }
              >
                1. B
                <img
                  src={egg}
                  className="w-6 mb-0.5 inline"
                  alt="egg-graphics"
                />
                inner
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-md p-4 mt-8 text-white ">
            This information will not be shared publicly but will allow us to
            divide the teams more evenly leading to a fairer game.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-white rounded-lg p-8 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold ">Profile Details</h1>
          <div className="">
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              required
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
            />
          </div>
          <div className="">
            <label htmlFor="age" className="sr-only">
              Age
            </label>
            <input
              required
              type="number"
              id="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
            />
          </div>
          <div className="">
            <label htmlFor="contactNumber" className="sr-only">
              Contact Number
            </label>
            <input
              required
              type="tel"
              id="contactNumber"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md w-full font-bold"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
