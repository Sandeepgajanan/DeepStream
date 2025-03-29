import React from "react";
import { Link } from "react-router-dom";
const SideMenuu = ({ item, index }) => {
  return (
    <Link
      to={`${index === 0 ? "/" : "#"}`}
      className="flex items-center gap-4 justify-center w-full h-10 rounded-md bg-zinc-100 p-3  hover:bg-zinc-300 transition-colors cursor-pointer max-sm:p-1 max-sm:h-8 "
    >
      <i className={`${item.icon} ri-lg`}></i>
    </Link>
  );
};

export default SideMenuu;
