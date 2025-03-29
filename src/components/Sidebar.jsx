import React from "react";
import SideMenuu from "./SideMenuu";
import SideMenu from "./SideMenu";
import { data1, data2, data3 } from "./Constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  return (
    <>
      {!isMenuOpen? (
        <div
          className={`w-28  h-[calc(100vh-64px)] fixed top-16 overflow-y-auto custom-scrollbar p-3 shadow-md space-y-3  bg-zinc-50 max-sm:w-20 max-sm:top-10 z-30
          }`}
        >
          {data1.map((item, index) => (
            <SideMenuu item={item} key={index} index={index} />
          ))}
          <h2 className="text-lg font-semibold max-sm:text-sm">You</h2>
          {data2.map((item, index) => (
            <SideMenuu item={item} key={index} />
          ))}
          <div className="w-full h-[1px] bg-zinc-200 "></div>
          <h2 className="text-lg font-semibold max-sm:text-sm">Explore</h2>
          {data3.map((item, index) => (
            <SideMenuu item={item} key={index} />
          ))}
        </div>
      ) : (
        <div
          className={`w-56 h-[calc(100vh-64px)] fixed top-16 overflow-y-auto custom-scrollbar p-3 shadow-md space-y-3 z-30 bg-zinc-50 max-sm:hidden  max-sm:overflow-x-auto max-sm:overflow-y-hidden 
          }`}
        >
          {data1.map((item, index) => (
            <SideMenu item={item} key={index} index={index} />
          ))}
          <h2 className="text-lg font-semibold">You</h2>
          {data2.map((item, index) => (
            <SideMenu item={item} key={index} />
          ))}
          <div className="w-full h-[1px] bg-zinc-200 "></div>
          <h2 className="text-lg font-semibold">Explore</h2>
          {data3.map((item, index) => (
            <SideMenu item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
