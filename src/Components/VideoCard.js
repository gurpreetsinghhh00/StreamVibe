import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;
  return (
    <div className="w-[308px] h-96 shadow-md rounded-md">
      <img className="h-3/5 w-[308px] rounded-md" src={thumbnails.medium.url} />
      <div className="flex flex-col px-1 py-2 justify-between h-2/5">
        <h1 className="font-bold">{title}</h1>
        <h2>{snippet.channelTitle}</h2>
        <p>{statistics.viewCount / 1000}K Views</p>
      </div>
    </div>
  );
};

export default VideoCard;
