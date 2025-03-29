import React from "react";

const VideoCard = ({info}) => {
  return (
    <div className="w-80 rounded-xl cursor-pointer  bg-zinc-100 overflow-hidden max-sm:w-full ">
      <div className="w-full h-52 bg-zinc-300  ">
        <img
          src={info?.snippet?.thumbnails?.standard?.url}
          alt={info?.snippet?.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-2 px-3 py-2">
        <div className="h-8">
          <h2 className="text-base font-bold text-zinc-900  leading-none line-clamp-2  ">
            {info?.snippet?.title}
          </h2>
        </div>

        <p className="text-gray-500 text-sm font-thin">
          {info?.snippet?.channelTitle}
        </p>

        <div className="flex items-center text-gray-400 text-xs gap-4 font-bold">
          <span>
            {Number(info?.statistics?.viewCount).toLocaleString()} views
          </span>
          <span>{new Date(info?.snippet?.publishedAt).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
