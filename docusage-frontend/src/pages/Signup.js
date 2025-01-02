import React from "react";
import logo from "../assets/images/logo.svg"; // Adjust the path to your logo
import signupImage from "../assets/images/image.png"; // Adjust the path to your image

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-blue-100 flex items-center justify-center">
      {/* Main Container */}
      <div className="w-11/12 max-w-7xl rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-start">
          <div className="flex items-center mb-8">
            <img src={logo} alt="Docusage Logo" className="h-10 mr-3" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Create New Account</h2>
          <p className="text-gray-600 mb-6">Start analyzing documents today!</p>
          <form className="space-y-6 max-w-3xl w-3/4">
            {/* Full Name Input */}
            <div className="flex items-center bg-white border rounded-full shadow-sm focus-within:ring focus-within:ring-orange-400">
              <span className="pl-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full px-8 py-4 text-lg border-0 rounded-r-full focus:ring-2 focus:ring-orange-400 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center bg-white border rounded-full shadow-sm focus-within:ring focus-within:ring-orange-400">
              <span className="pl-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c2.33 0 7 1.17 7 3.5V18H5v-.5c0-2.33 4.67-3.5 7-3.5z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-8 py-4 text-lg border-0 rounded-r-full focus:ring-2 focus:ring-orange-400 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center bg-white border rounded-full shadow-sm focus-within:ring focus-within:ring-orange-500">
              <span className="pl-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.69 2 6 4.69 6 8v6H4v8h16v-8h-2V8c0-3.31-2.69-6-6-6zm-4 6c0-2.21 1.79-4 4-4s4 1.79 4 4v6H8V8zm10 12H6v-4h12v4z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Password*"
                className="w-full px-8 py-4 text-lg border-0 rounded-r-full focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="flex items-center bg-white border rounded-full shadow-sm focus-within:ring focus-within:ring-orange-500">
              <span className="pl-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.69 2 6 4.69 6 8v6H4v8h16v-8h-2V8c0-3.31-2.69-6-6-6zm-4 6c0-2.21 1.79-4 4-4s4 1.79 4 4v6H8V8zm10 12H6v-4h12v4z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Confirm Password*"
                className="w-full px-8 py-4 text-lg border-0 rounded-r-full focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center text-lg">
              <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
              <label className="ml-2 text-gray-600">
                I agree to the{" "}
                <a href="#terms" className="text-orange-500 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-5 text-lg rounded-md hover:bg-orange-600 transition"
            >
              SIGN UP
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 hover:underline font-medium">
              Log In
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center">
          <img src={signupImage} alt="Illustration" className="w-11/12 rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center w-full text-sm text-gray-500">
        © 2024 Docusage | All Rights Reserved
      </footer>
    </div>
  );
};

export default Signup;
