import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_URL } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();

    setVideos(json.items);
    // console.log(json.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="font-verela mt-4 flex flex-wrap gap-4">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
