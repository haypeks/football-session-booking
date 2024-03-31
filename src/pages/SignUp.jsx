import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    // Check if password matches confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Strong password validation
    const strongPasswordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setError(
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    // Check if the checkbox is checked
    if (!isChecked) {
      setError("Please agree to terms and conditions before signing up");
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
        className="flex flex-col gap-1 bg-white rounded-lg p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4">Sign up</h1>
        <div className="w-full mb-4">
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
        <div className=" w-full mb-4">
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
            className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" w-full mb-6">
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            required
            value={confirmPassword}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="border-2 border-solid border-gray-300 w-full p-2 rounded-md"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div>
            <input
              type="checkbox"
              id="agreecheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div>
            I agree to the
            <span className=" text-accent underline ml-2">
              terms & conditions.
            </span>
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button className="bg-primary mt-3 text-white py-2 px-4 rounded-md font-bold  w-full">
          Sign up
        </button>
        <p className="text-center my-2">
          <Link to="/signin" className="text-green-500 underline">
            Have an account? Sign in
          </Link>
        </p>
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

export default Signup;
