import React from "react";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const LayoutDashBoard = ({ children }) => {
  return (
    <div className="px-12 py-10 bg-lite">
      {/* <div className="fixed inset-0 z-40 bg-black overlay bg-opacity-10"></div> */}
      <DashboardTopbar></DashboardTopbar>
      <div className="flex gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
