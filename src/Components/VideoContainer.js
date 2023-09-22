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
    <div className="font-verela mt-4 grid grid-cols-1 gap-x-5 gap-y-10 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
