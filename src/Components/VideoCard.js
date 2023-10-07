import avatar from "../assets/img/avatar.png";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;
  return (
    <div className="shadow-md rounded-md">
      <img className="w-full rounded-md" src={thumbnails.medium.url} />
      <div className="flex py-2">
        <img className="h-14 p-1" src={avatar} />
        <div className="flex flex-col px-1 gap-3 w-full">
          <h1 className="font-bold text-lg h-[3.8rem] overflow-hidden text-ellipsis py-1 ">
            {title}
          </h1>
          <div className="text-sm w-[90%]">
            <h2 className="overflow-hidden text-ellipsis h-5 my-2 w-full">
              {snippet.channelTitle}.✔
            </h2>
            <p>{statistics.viewCount} Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
