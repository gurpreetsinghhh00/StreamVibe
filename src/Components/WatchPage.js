import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_ID_API } from "../Utils/constant";
import LiveChat from "./LiveChat";
import { addMessage } from "../Utils/chatSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDescription, setVideoDescription] = useState([]);
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_ID_API + searchParams.get("v"));
    const json = await data.json();

    setVideoDescription(json.items);
    // console.log(videoDescription);
  };

  return (
    <div className="font-verela p-8 flex gap-10 overflow-y-scroll w-full h-[90vh]">
      <div className="flex flex-col w-8/12 gap-5">
        <div>
          <iframe
            className="rounded-md w-full"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="font-bold text-xl">
          {videoDescription[0]?.snippet?.title}
        </h1>
        <div className="flex justify-between">
          <div className="flex items-center">
            <a>
              <img
                className="h-11 cursor-pointer"
                alt="Channel Icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-umWad93MGg29rt6KpquK3vSQBFjT1zcXThCCSzQ&s"
              />
            </a>
            <h2 className="ml-2 font-bold text-lg cursor-pointer">
              {videoDescription[0]?.snippet?.channelTitle}
            </h2>
            <button className="bg-black text-white py-2 px-3 rounded-md ml-8">
              Subscribe
            </button>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-200 py-2 px-4 rounded-l-full border-r border-gray-300">
              like
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded-r-full">
              Dislike
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded-full ml-4">
              Download
            </button>
          </div>
        </div>
        <CommentsContainer />
      </div>
      <div className="flex flex-col border-2 p-2 rounded-lg border-gray-300 w-4/12 bg-gray-100 h-[550px]">
        <div className="h-5/6 overflow-y-scroll flex flex-col-reverse overflow-x-hidden">
          <LiveChat />
        </div>
        <form
          className="h-1/6 flex p-5 gap-4 justify-between bg-white rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Gurpreet Singh",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            placeholder="Chat.."
            value={liveMessage}
            className="rounded-lg w-2/3 border-2 border-gray-400 px-2 "
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="bg-black text-white rounded-md px-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WatchPage;
