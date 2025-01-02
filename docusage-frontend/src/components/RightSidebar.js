import React from "react";

const Sidebar = () => {
  const menuItems = [
    { icon: "fas fa-th-large", tooltip: "Dashboard" },
    { icon: "fas fa-file-alt", tooltip: "Documents" },
    { icon: "fas fa-upload", tooltip: "Uploads" },
    { icon: "fas fa-chart-bar", tooltip: "Analytics" },
  ];

  return (
    <div className="bg-white h-screen w-20 flex flex-col items-center py-6 shadow-md">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="mb-6 cursor-pointer text-gray-500 hover:text-orange-500"
          title={item.tooltip}
        >
          <i className={`${item.icon} text-2xl`}></i>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
