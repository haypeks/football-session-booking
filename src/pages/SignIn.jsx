import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // If all validations pass, you can proceed with form submission
    setError("");
    // Add your submission logic here
  };

  return (
    <div className="other-bg bg-cover bg-center p-4 min-h-screen flex items-center justify-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white rounded-lg p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
        <div className="formGroup w-full mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            required
            value={email}
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroup w-full mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            required
            value={password}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button className="bg-primary text-white py-2 px-4 rounded-md w-full font-bold">
          Sign in
        </button>
        <div className="flex justify-between gap-4 text-center">
          <Link to="/forgotpassword" className="text-accent text-sm underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-accent text-sm underline">
            Don't Have an account? Sign Up
          </Link>
        </div>
        <button className=" bg-red-600 text-white py-2 px-4 rounded-md mb-2 flex justify-center align-center gap-2 w-full">
          <FaGoogle className="mt-1" size={15} />
          Sign in with Google
        </button>
        <button className=" bg-blue-600 text-white py-2 px-4 rounded-md flex justify-center align-center gap-2 w-full">
          <FaFacebookF className="mt-1" size={15} />
          Sign in with Facebook
        </button>
      </form>
    </div>
  );
};

export default Signin;
