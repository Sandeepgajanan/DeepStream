import React, { useEffect, useState } from "react";
import { API_KEY } from "../components/Constants";
export const useVideos=({ categoryId = "0" } = {})=>{
  const [videosData, setVideosData] = useState(null);
  const getYouTubeVideos = async () => {

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
    );
    const data = await response.json();
    if (data) {
      setVideosData(data.items);
    }
  };

  useEffect(() => {
    getYouTubeVideos();
  }, [categoryId]);
  return videosData;
}
