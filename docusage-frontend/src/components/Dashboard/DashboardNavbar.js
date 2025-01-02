import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import profileImage from "../../assets/images/profile.jpg"; // Adjust the path to your profile image

const DashboardNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear any authentication-related data here (like tokens)
    console.log("Logging out...");
    // Redirect to the home page
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">Docusage Dashboard</h1>

      {/* Actions */}
      <div className="flex items-center space-x-6">
        {/* Upgrade Plan Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          Upgrade Plan
        </button>

        {/* Book a Demo Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Book a Demo
        </button>

        {/* Notification Icon */}
        <div className="relative">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <i className="fas fa-bell text-gray-600 text-xl"></i>
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-block h-4 w-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={profileImage}
              alt="User"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-gray-800 font-medium">James Turner</span>
            <i
              className={`fas fa-chevron-down text-gray-600 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            ></i>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
