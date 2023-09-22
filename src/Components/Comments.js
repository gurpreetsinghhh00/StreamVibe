import React from "react";
import userIcon from "../assets/img/userIcon.png";

const Comments = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex p-2 gap-2 bg-gray-200 rounded-md m-2">
      <img className="h-11 cursor-pointer " alt="userIcon" src={userIcon} />
      <div>
        <h2 className="font-bold">{name}</h2>
        <p className="text-xs md:text-base">{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
