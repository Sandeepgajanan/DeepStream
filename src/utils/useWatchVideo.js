import React, { useEffect, useState } from "react";
import { API_KEY } from "../components/Constants";
export const useWatchVideo = (id) => {
  if(!id) return

  const [watchVideo, setWatchVideo] = useState(null);
  const getVideos = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
    );
    const data = await response.json();
    if (data) {
      setWatchVideo(data.items);
    }
  };

  useEffect(() => {
    getVideos();
  }, [id]);

  return watchVideo;
};
