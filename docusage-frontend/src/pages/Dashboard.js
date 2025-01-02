import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import Overview from "../components/Dashboard/Overview";
import Uploads from "../components/Dashboard/Uploads";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <DashboardNavbar />
        <main className="p-6 bg-gray-100">
          <Overview />
          <Uploads />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
