import React from "react";

const RecomCard = ({ info }) => {
  return (
    <>
      <div className="w-full rounded-xl cursor-pointer  bg-zinc-100 overflow-hidden  flex p-2 h-28  max-sm:h-full ">
        <div className="min-w-36  bg-zinc-300 rounded-lg overflow-hidden h-full">
          <img
            src={info?.snippet?.thumbnails?.standard?.url}
            alt={info?.snippet?.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-1 px-3 py-2">
          <div className="h-8">
            <h2 className="text-sm font-bold text-zinc-900  leading-none line-clamp-2  ">
              {info?.snippet?.title}
            </h2>
          </div>

          <p className="text-gray-500 text-xs font-thin">
            {info?.snippet?.channelTitle}
          </p>

          <div className="flex items-center text-gray-400 text-xs gap-2 font-bold text-nowrap max-sm:flex-col">
            <span>
              {Number(info?.statistics?.viewCount).toLocaleString()} views
            </span>
            <span>{new Date(info?.snippet?.publishedAt).toDateString()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecomCard;
