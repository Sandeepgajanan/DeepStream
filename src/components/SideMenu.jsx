import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ item, index }) => {
  return (
    <Link
      to={`${index === 0 ? "/" : "#"}`}
      className="flex items-center  gap-4 w-full h-10 rounded-md bg-zinc-100 p-3  hover:bg-zinc-300 transition-colors cursor-pointer"
    >
      <i className={`${item.icon} ri-lg`}></i>
      <h2 className="text-sm font-semibold ">{item.text}</h2>
    </Link>
  );
};

export default SideMenu;
