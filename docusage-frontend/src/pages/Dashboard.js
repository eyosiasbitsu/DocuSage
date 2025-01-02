import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Welcome to Docusage</h1>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          onClick={handleLogout} // Attach logout handler
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Overview Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Dummy Cards */}
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-blue-600">10</h3>
              <p className="text-gray-600">Uploaded Files</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-green-600">8</h3>
              <p className="text-gray-600">Processed Files</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-red-600">2</h3>
              <p className="text-gray-600">Failed Files</p>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="text-gray-600">File Analysis Completed</span>
              <span className="text-gray-500 text-sm">5 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">File Upload Failed</span>
              <span className="text-gray-500 text-sm">15 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">New File Uploaded</span>
              <span className="text-gray-500 text-sm">30 mins ago</span>
            </li>
          </ul>
        </section>

        {/* Action Buttons */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Actions</h2>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Upload File
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Analyze Files
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
