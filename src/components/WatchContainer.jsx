import { useParams } from "react-router-dom";
import { useWatchVideo } from "../utils/useWatchVideo";
import ShimmerWatch from "./ShimmerWatch";
import Recommended from "./Recommended";
import Comments from "./Comments";

const WatchContainer = () => {
  const { id } = useParams();
  const videoDetails = useWatchVideo(id);

  if (!videoDetails) return <ShimmerWatch />;
  console.log(videoDetails);

  return (
    <div className="flex ml-40 p-1 h-[calc(100vh-64px)] overflow-y-auto  max-sm:ml-0 max-sm:p-2 max-sm:flex-col  w-full">
      <div className="flex flex-col w-full  ">
        <div className="flex flex-col shadow-md max-w-2xl  rounded-t-xl space-y-2 p-2 pb-4    max-sm:w-full">
          <div className="min-h-96 max-sm:min-h-48 min-w-full ">
            <iframe
              className="w-full h-full "
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title={videoDetails[0]?.snippet?.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="space-y-2 px-1">
            <h1 className="text-lg font-semibold leading-tight text-zinc-900 max-sm:text-base">
              {videoDetails[0]?.snippet?.title}
            </h1>
            <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <div className="flex w-1/2 gap-4 items-center max-sm:w-full max-sm:justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={videoDetails[0]?.snippet?.thumbnails?.high?.url}
                    alt="Channel"
                    className="w-12 h-12 rounded-full object-center  max-sm:w-10 max-sm:h-10"
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-zinc-900 max-sm:text-xs">
                      {videoDetails[0]?.snippet?.channelTitle}
                    </h2>
                    <p className="text-xs text-gray-600">1.2M subscribers</p>
                  </div>
                </div>
                <button className="bg-zinc-900 text-white text-sm w-28 h-8 p-1 text-center rounded-full shadow-md hover:bg-zinc-800 transition">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600 border-b py-1 max-sm:justify-between max-sm:w-full ">
                <div className="flex items-center space-x-2 cursor-pointer bg-zinc-100 p-2 rounded-full   ">
                  <i className="ri-thumb-up-line "></i>
                  <p className="text-black pr-1 border-r border-r-zinc-300">
                    {videoDetails[0]?.statistics?.likeCount}
                  </p>
                  <i className="ri-thumb-down-line  pr-1"></i>
                </div>

                <div className="flex items-center space-x-1 cursor-pointer bg-zinc-100 p-2 rounded-full ">
                  <i class="ri-share-forward-line"></i>
                  <p>Share</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-4 text-sm text-gray-600 max-sm:flex-wrap">
                <p>{videoDetails[0]?.statistics?.viewCount} views</p>
                <p>
                  {new Date(
                    videoDetails[0]?.snippet?.publishedAt
                  ).toDateString()}
                </p>
              </div>

              {/* Video Description */}
              <div className="text-gray-600 text-sm leading-relaxed  max-sm:text-xs line-clamp-3">
                {videoDetails[0]?.snippet?.description}
              </div>
            </div>
          </div>
        </div>

        <Comments />
      </div>

      <div className="w-[26rem] fixed top-16 right-6 max-sm:relative max-sm:top-0 max-sm:right-0 max-sm:w-full max-sm:mt-4 ">
        <Recommended />
      </div>
    </div>
  );
};

export default WatchContainer;
