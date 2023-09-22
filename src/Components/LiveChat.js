import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateName, makeRandomString } from "../Utils/helper";
import { OFFSET_STRING_LEN } from "../Utils/constant";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("interval");
      dispatch(
        addMessage({
          name: generateName(),
          message: makeRandomString(OFFSET_STRING_LEN),
        })
      );
    }, 1500);

    return () => {
      clearInterval(interval); //cleanup function
    };
  }, []);

  return (
    <div>
      {messages.map((c, index) => {
        return <ChatMessage {...c} key={index} />;
      })}
    </div>
  );
};

export default LiveChat;
