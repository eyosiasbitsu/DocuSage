import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to home first, then scroll after render
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/path-to-your-logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, "pricing")}
              className="text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScroll(e, "faq")}
              className="text-gray-600 hover:text-gray-900"
            >
              FAQ
            </a>
          </div>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-orange-500 text-white px-4 py-2 hover:bg-orange-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
