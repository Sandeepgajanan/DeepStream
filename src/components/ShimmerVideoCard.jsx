import React from "react";

const ShimmerVideoCard = ({ index }) => {
  return (
    <div
      className="w-80 rounded-xl cursor-pointer  bg-zinc-100  animate-pulse p-1 max-sm:w-full "
      key={index}
    >
      <div className="w-full h-52 bg-zinc-400 rounded-xl overflow-hidden"></div>

      <div className="space-y-2 px-3 py-2">
        <div className="h-6 bg-zinc-300/80 rounded-md"></div>

        <p className="h-4 bg-zinc-200 rounded-md"></p>

        <div className="flex items-center  gap-4">
          <span className="h-2 bg-zinc-200 w-20"></span>
          <span className="h-2 bg-zinc-200 w-20"></span>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
