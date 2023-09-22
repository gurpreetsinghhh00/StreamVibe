import React from "react";

const SidebarItems = ({ title }) => {
  return (
    <div className="mt-3 p-2 border-t-2">
      <ul>
        <h1 className="font-bold mt-2 text-xl">{title}</h1>
        <li className="p-2 rounded-md hover:bg-gray-200">Library</li>
        <li className="p-2 rounded-md hover:bg-gray-200">History</li>
        <li className="p-2 rounded-md hover:bg-gray-200">Watch Later</li>
        <li className="p-2 rounded-md hover:bg-gray-200">Liked Videos</li>
      </ul>
    </div>
  );
};

export default SidebarItems;
