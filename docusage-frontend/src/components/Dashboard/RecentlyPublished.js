import React from "react";

const RecentlyPublished = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recently Published Menus
      </h2>
      <div className="bg-orange-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-orange-600">
          Get Started with Your First Digital Menu
        </h3>
        <p className="text-gray-600 mt-2">
          Start digitizing your menu today and elevate your restaurant!
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
          Create Your First Menu Now
        </button>
      </div>
    </div>
  );
};

export default RecentlyPublished;
