import React from "react";
import userIcon from "../assets/img/userIcon.png";

const SearchCard = ({ info }) => {
  const { snippet } = info;
  return (
    <div className="flex w-9/12 gap-4">
      <img
        className="rounded-lg w-80 h-52"
        src={snippet?.thumbnails?.medium?.url}
      />
      <div className="flex flex-col px-1 py-2 justify-between">
        <h1 className="font-bold text-xl ">{snippet?.title}</h1>
        <div className="flex  items-center p-1 gap-2">
          <img className="h-7" src={userIcon} alt="channelIcon" />
          <h2 className="font-bold  ">{snippet?.channelTitle}</h2>
        </div>
        <p className="text-xs p-1 p">{snippet?.description}</p>
      </div>
    </div>
  );
};

export default SearchCard;
