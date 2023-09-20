import React, { useState, useEffect } from "react";
import VideoContainer from "./VideoContainer";
import { useSelector, useDispatch } from "react-redux";
import CategoryList from "./CategoryList";
import { YOUTUBE_VIDEOS_URL } from "../Utils/constant";
import { addVideos } from "../Utils/videoSlice";

const list = [
  "All",
  "Gaming",
  "Music",
  "Romance",
  "Live",
  "DSA",
  "News",
  "Sitcom",
  "Anime",
  "Science",
  "Cars",
  "Technology",
];

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    getVideoList();
  }, []);

  // throttling
  const handleScroll = () => {
    if (!isThrottled) {
      // console.log("Throttled function called");
      getVideoList();
      setIsThrottled(true);

      setTimeout(() => {
        setIsThrottled(false);
      }, 300);
    }
  };

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  let width = isMenuOpen ? " w-10/12 px-12" : " w-full px-8";

  return (
    <div
      className={"h-[90vh] overflow-y-scroll py-4" + width}
      onScroll={(e) => handleScroll()}
    >
      <div className=" w-full py-1">
        <ul className="flex gap-2 p-1 overflow-hidden">
          {list.map((l) => {
            return <CategoryList name={l} key={l} />;
          })}
        </ul>
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
