import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (isMenuOpen === false) {
    return null;
  }

  return (
    <div className="w-2/12 p-2 h-[90vh] overflow-y-scroll font-verela">
      <div className="p-2 border-b-2">
        <ul>
          <li className="p-2 rounded-md hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 rounded-md hover:bg-gray-200">Shorts</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Subscription</li>
        </ul>
      </div>
      <div className="mt-3 p-2 border-b-2">
        <ul>
          <li className="p-2 rounded-md hover:bg-gray-200">Library</li>
          <li className="p-2 rounded-md hover:bg-gray-200">History</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Watch Later</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Liked Videos</li>
        </ul>
      </div>
      <div className="mt-3 p-2 border-b-2">
        <ul>
          <h1 className="font-bold mt-2 text-lg">Explore</h1>
          <li className="p-2 rounded-md hover:bg-gray-200">Library</li>
          <li className="p-2 rounded-md hover:bg-gray-200">History</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Watch Later</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Liked Videos</li>
        </ul>
      </div>
      <div className="mt-3 p-2 border-b-2">
        <ul>
          <h1 className="font-bold mt-2 text-lg">Kids</h1>
          <li className="p-2 rounded-md hover:bg-gray-200">Library</li>
          <li className="p-2 rounded-md hover:bg-gray-200">History</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Watch Later</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Liked Videos</li>
        </ul>
      </div>
      <div className="mt-3 pb-2">
        <ul>
          <h1 className="font-bold mt-2 text-lg">Explore</h1>
          <li className="p-2 rounded-md hover:bg-gray-200">Library</li>
          <li className="p-2 rounded-md hover:bg-gray-200">History</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Watch Later</li>
          <li className="p-2 rounded-md hover:bg-gray-200">Liked Videos</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
