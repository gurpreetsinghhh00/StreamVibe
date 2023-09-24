import React from "react";
import userIcon from "../assets/img/userIcon.png";

const SearchCard = ({ info }) => {
  const { snippet } = info;
  return (
    <div className="flex flex-col items-centre p-2 w-full gap-1 md:gap-4 sm:px-8 md:px-1 md:flex-row">
      <img
        className="rounded-lg w-full sm:h-60 md:w-[320px] md:h-44"
        src={snippet?.thumbnails?.medium?.url}
      />
      <div className="flex flex-col px-1 py-2 justify-between gap-2">
        <h1 className="font-bold text-lg h-[3.8rem] overflow-hidden text-ellipsis py-1">
          {snippet?.title}
        </h1>
        <div className="flex  items-center p-1 gap-2">
          <img className="h-7" src={userIcon} alt="channelIcon" />
          <h2 className="font-bold">{snippet?.channelTitle}</h2>
        </div>
        <p className="text-xs px-1 overflow-hidden text-ellipsis h-8">
          {snippet?.description}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
