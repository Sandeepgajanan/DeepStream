import React from "react";
import { useVideos } from "../utils/useVideos";
import RecomCard from "./RecomCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuSlice";
import ShimmerRecom from "./ShimmerRecom";

const Recommended = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(closeMenu());
  };
  const videosData = useVideos({ categoryId: "10" });
  if (!videosData) {
    return (
      <div className="w-full shadow-md  py-1 flex flex-col items-center  gap-2 border-l-2 border-zinc-200 px-2 ">
        {Array(6)
          .fill()
          .map((_, index) => (
            <ShimmerRecom key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="w-full custom-scrollbar h-[calc(100vh-64px)] overflow-y-auto shadow-md  py-1 flex flex-col items-center  gap-2 border-l-2 border-zinc-200 px-2  max-sm:flex-row max-sm:overflow-x-auto  max-sm:h-fit">
      {videosData?.map((info) => (
        <Link to={`/watch/${info.id}`} key={info.id} onClick={handleSidebar}>
          <RecomCard info={info} />
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
