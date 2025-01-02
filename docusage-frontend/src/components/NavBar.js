import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#home">
              <img
                src="/path-to-your-logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="hidden sm:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#login" className="text-gray-600 hover:text-gray-900">
              Log in
            </a>
            <a
              href="#signup"
              className="rounded-full bg-orange-500 text-white px-4 py-2 hover:bg-orange-600"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
