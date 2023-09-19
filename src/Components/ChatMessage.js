import userIcon from "../assets/img/userIcon.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2 gap-2 items-center shadow-sm">
      <img className="h-5 cursor-pointer " alt="userIcon" src={userIcon} />
      <h2 className="font-bold text-md">{name}</h2>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
