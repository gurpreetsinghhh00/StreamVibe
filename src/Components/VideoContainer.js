import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_URL } from "../Utils/constant";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();

    setVideos(json.items);
  };

  // const videos = useSelector((store) => store.videos);

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="font-verela mt-4 grid grid-cols-1 gap-x-5 gap-y-10 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Don't use index */}
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
