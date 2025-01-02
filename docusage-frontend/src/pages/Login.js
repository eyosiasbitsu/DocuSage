import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import logo from "../assets/images/logo.svg"; // Adjust the path to your logo
import loginImage from "../assets/images/image.png"; // Adjust the path to your image

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    // Normally, you'd validate credentials here
    // For now, navigate to the dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-blue-100 flex items-center justify-center">
      {/* Main Container */}
      <div className="w-11/12 max-w-7xl rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-start">
          <div className="flex items-center mb-8">
            <img src={logo} alt="Docusage Logo" className="h-10 mr-3" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Log In to Your Account</h2>
          <p className="text-gray-600 mb-6">Welcome back! Enter your details to log in:</p>
          <form className="space-y-6 max-w-3xl w-3/4" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="flex items-center bg-white border rounded-full shadow-sm focus-within:ring focus-within:ring-orange-400">
              <span className="pl-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v14h16V5H4zm2 2h12v2H6V7zm0 4h12v2H6v-2z" />
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
            <div className="relative">
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
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center text-lg">
              <label className="flex items-center">
                <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-orange-500 hover:underline">Forgot Password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-5 text-lg rounded-md hover:bg-orange-600 transition"
            >
              LOGIN
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-orange-500 hover:underline font-medium">
              Create an account
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center">
          <img src={loginImage} alt="Illustration" className="w-11/12 rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center w-full text-sm text-gray-500">
        © 2024 Docusage | All Rights Reserved
      </footer>
    </div>
  );
};

export default Login;
