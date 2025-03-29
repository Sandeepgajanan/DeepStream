import React from "react";

const ShimmerRecom = () => {
  return (
    <div className="w-full rounded-xl cursor-pointer  bg-zinc-100 overflow-hidden max-sm:w-full flex p-2 h-28 max-sm:flex-col max-sm:h-full animate-pulse">
      <div className="min-w-36  bg-zinc-300 rounded-lg overflow-hidden h-full"></div>

      <div className="space-y-1 px-3 py-2">
        <div className="h-6 bg-zinc-300/80 rounded-md"></div>

        <p className="h-4 bg-zinc-200 rounded-md"></p>
        <div className="flex items-center text-gray-400 text-xs gap-2 font-bold">
          <span className="h-2 bg-zinc-200 w-20"></span>
          <span className="h-2 bg-zinc-200 w-20"></span>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRecom;
