import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_ID_API } from "../Utils/constant";
import LiveChat from "./LiveChat";
import { addMessage } from "../Utils/chatSlice";
import arrow from "../assets/img/arrow.png";
import ChatMessage from "./ChatMessage";

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
    <div className="overflow-y-scroll h-[90vh] w-full font-verela p-4">
      <div className="p-2 flex flex-col gap-6 w-full xl:flex-row xl:p-4">
        <div className="flex flex-col w-full gap-5 px-2 xl:w-8/12 xl:p-0">
          <div>
            <iframe
              className="rounded-md w-full"
              height="450"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="font-bold text-xl mt-4">
              {videoDescription[0]?.snippet?.title}
            </h1>
            <div className="grid grid-col-1  lg:grid-cols-2 lg:justify-between mt-4 gap-3 w-full">
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
                <button className="bg-black text-white py-2 px-3 rounded-md ml-20 lg:ml-8">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center md:justify-start lg:justify-end">
                <div className="ml-12">
                  <button className="bg-gray-200 py-2 px-4 rounded-l-full border-r border-gray-300">
                    like
                  </button>
                  <button className="bg-gray-200 py-2 px-4 rounded-r-full">
                    Dislike
                  </button>
                </div>
                <button className="bg-gray-200 py-2 px-4 rounded-full ml-[58px] lg:ml-8">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 p-2 rounded-md w-full xl:w-4/12 bg-gray-100 h-[550px]">
          <h1 className="font-bold text-lg border-b-2 border-black p-2">
            Live Chat
          </h1>
          <div className="h-full overflow-y-scroll flex flex-col-reverse overflow-x-hidden">
            <LiveChat />
          </div>
          <form
            className="flex py-3 px-2 gap-4 items-center bg-white rounded-md"
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
              className=" w-full border-b-2 border-gray-400 px-2 h-10 outline-none"
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button className="px-4 h-10 cursor-pointer">
              <img src={arrow} className="w-10" />
            </button>
          </form>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
