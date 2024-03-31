import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!email) {
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
        className="bg-white rounded-lg p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <div className=" w-full mb-4">
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button className="bg-primary text-white py-2 px-4 rounded-md w-full font-bold">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
