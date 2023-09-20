import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);

  const videos = useSelector((store) => store.videos);

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="font-verela mt-4 flex flex-wrap gap-4 h-[90vh] w-full">
      {/* Don't use index */}
      {videos.map((video, index) => {
        return (
          <Link to={"/watch?v=" + video.id} key={index}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
