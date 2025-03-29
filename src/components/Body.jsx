import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden max-sm:flex-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
