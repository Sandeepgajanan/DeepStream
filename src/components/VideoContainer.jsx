import VideoCard from "./VideoCard";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { useVideos } from "../utils/useVideos";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuSlice";

const VideoContainer = ({categoryId}) => {
  
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(closeMenu());
  };
  const videosData = useVideos({categoryId});

  if (!videosData) {
    return (
      <div className="grid gap-4 grid-cols-3 pb-5 max-sm:grid-cols-1">
        {Array(6)
          .fill()
          .map((_, index) => (
            <ShimmerVideoCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="grid  gap-4 grid-cols-3 pb-5 max-sm:grid-cols-1">
      {videosData.map((item) => (
        <Link to={`watch/${item.id}`} key={item.id} onClick={handleSidebar}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
