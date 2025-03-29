import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
const MainContainer = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId") || "0"; 
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  return (
    <div
      className={`${
        isMenuOpen ? "ml-56" : "ml-28"
      } flex-1 h-[calc(100vh-64px)] overflow-y-auto px-5 max-sm:ml-0 max-sm:w-full`}
    >
      <ButtonList />
      <VideoContainer categoryId={categoryId} />
    </div>
  );
};

export default MainContainer;
