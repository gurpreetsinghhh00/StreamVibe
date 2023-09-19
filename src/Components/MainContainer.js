import React from "react";
import Button from "./CategoryList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";

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
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  let width = isMenuOpen ? " w-10/12 px-12" : " w-full px-8";

  return (
    <div className={"h-[90vh] overflow-y-scroll py-4" + width}>
      <div className=" w-ful py-1">
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
