import React from "react";

const stats = [
  { title: "Documents Uploaded", value: 12, color: "bg-blue-100" },
  { title: "Insights Generated", value: 18, color: "bg-green-100" },
  { title: "Questions Asked", value: 24, color: "bg-yellow-100" },
];

const Overview = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} rounded-lg p-4 text-center shadow`}
          >
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
