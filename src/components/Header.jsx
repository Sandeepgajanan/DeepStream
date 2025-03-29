import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { Link } from "react-router-dom";
import { API_KEY } from "./Constants";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  const getSuggestions = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&key=${API_KEY}`
      );
      const data = await response.json();
      const suggestionsData = data.items.map((video) => ({
        title: video.snippet.title,
        videoId: video.id.videoId,
      }));
      setSuggestions(suggestionsData);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchText) getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchText]);

  return (
    <div className="grid grid-flow-col  h-16 w-full max-sm:py-2  items-center gap-10  max-sm:h-10 max-sm:justify-between max-sm:mb-1 ">
      <div className="flex  gap-4 max-sm:gap-1  col-span-2 px-2 ">
        <button onClick={handleToggle}>
          <i className="ri-menu-line ri-lg  text-zinc-600 cursor-pointer  rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-200 transition-colors max-sm:w-7 max-sm:h-7     "></i>
        </button>
        <Link to="/">
          <img
            src="../logo.png"
            alt="logo"
            className="h-16 cursor-pointer max-sm:hidden"
          />
        </Link>
      </div>

      <div className=" max-sm:ml-2 col-span-12  h-full content-center px-2 max-sm:col-span-4">
        <div className="flex ">
          <input
            type="text"
            placeholder="Search"
            className="h-10 text-sm w-full  px-2  text-gray-700  rounded-l-full border border-zinc-300 outline-none max-sm:h-8 max-sm:text-xs"
            onFocus={() => setSearchState(true)}
            onBlur={() => setTimeout(() => setSearchState(false), 200)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <i className="ri-search-line ri-lg w-12 px-2 flex items-center justify-center h-10 rounded-r-full  bg-zinc-200  text-gray-500 cursor-pointer hover:bg-zinc-300 transition-colors max-sm:h-8"></i>
        </div>
        {searchState && (
          <div className="bg-white rounded-md px-2 py-4  fixed w-[45.5rem] max-sm:left-1 max-sm:w-72  border-sky-50 border shadow-md z-20">
            <ul className="space-y-2">
              {suggestions?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/watch/${item.videoId}`} // Navigate to Watch Page with Video ID
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-zinc-50 transition-colors cursor-pointer"
                  >
                    <i className="ri-search-line ri-md text-zinc-950"></i>
                    <h2 className="text-sm font-bold">{item.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className=" flex   col-span-1 h-full  gap-4 items-center  max-sm:hidden">
        <div className="ml-2 rounded-full w-10 h-10  bg-zinc-200 flex items-center justify-center cursor-pointer hover:bg-zinc-300 transition-colors">
          <i className="ri-mic-fill "></i>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-3xl bg-zinc-200 w-fit px-3 h-10 cursor-pointer hover:bg-zinc-300 transition-colors ">
          <i className="ri-add-line text-zinc-950 ri-lg "></i>
          <h2 className="text-base font-semibold ">Create</h2>
        </div>
        <div className="flex gap-2 items-center">
          <i className="ri-notification-4-line ri-xl  w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors"></i>
          <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center px-3 cursor-pointer">
            <h2 className="text-white text-lg font-bold uppercase ">s</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
