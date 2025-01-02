import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: "fas fa-tachometer-alt", label: "Dashboard", link: "/dashboard" },
  { icon: "fas fa-file-upload", label: "Uploads", link: "/uploads" },
  { icon: "fas fa-question", label: "Ask Questions", link: "/questions" },
  { icon: "fas fa-lightbulb", label: "Insights", link: "/insights" },
  { icon: "fas fa-chart-line", label: "Analytics", link: "/analytics" },
  { icon: "fas fa-cog", label: "Settings", link: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 h-screen shadow-md fixed">
      <div className="p-6">
        <img
          src="/path-to-your-logo.svg"
          alt="Docusage Logo"
          className="h-12 mb-6"
        />
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center space-x-3 text-gray-700 hover:text-orange-500"
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
