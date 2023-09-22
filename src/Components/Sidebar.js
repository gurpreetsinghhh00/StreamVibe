import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home from "../assets/svg/home.svg";
import shorts from "../assets/svg/shorts.svg";
import trending from "../assets/svg/trending.svg";
import subscriptions from "../assets/svg/subscriptions.svg";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const divStyle = `flex cursor-pointer rounded-md hover:bg-gray-200 p-2 items-center ${
    isMenuOpen ? "flex-row gap-x-5" : "flex-col gap-y-2"
  }`;
  const para = isMenuOpen ? "text-md" : "text-xs font-bold";

  return (
    <div
      className={`hidden sm:block ${
        isMenuOpen ? "w-60 overflow-y-scroll" : "w-24 bg-gray-100"
      } p-2 h-[90vh] font-verela`}
    >
      <div className="py-2">
        <Link to="/">
          <div className={divStyle}>
            <img className="w-7" src={home} alt="home" />
            <p className={para}>Home</p>
          </div>
        </Link>
        <div className={divStyle}>
          <img className="w-7" src={shorts} alt="shorts" />
          <p className={para}>Shorts</p>
        </div>
        <div className={divStyle}>
          <img className="w-7" src={subscriptions} alt="subscriptions" />
          <p className={para}>Subscriptions</p>
        </div>
        <div className={divStyle}>
          <img className="w-7" src={trending} alt="trending" />
          <p className={para}>Trending</p>
        </div>
      </div>

      <div className={isMenuOpen ? "p-1" : "hidden"}>
        <SidebarItems title="Explore"></SidebarItems>
        <SidebarItems title="Kids"></SidebarItems>
        <SidebarItems title="Other"></SidebarItems>
      </div>
    </div>
  );
};

export default Sidebar;
