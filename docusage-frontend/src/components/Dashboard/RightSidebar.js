import React from "react";

const RightSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Complete Your Business Profile
        </h3>
        <p className="text-sm text-gray-600">
          Start your digital menu journey today.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          Add Business Info
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Google Business Profile
        </h3>
        <p className="text-sm text-gray-600">
          Submit your business to Google and attract more customers.
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4">
          Connect
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
