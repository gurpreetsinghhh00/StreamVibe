import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_SEARCH_RESULTS } from "../Utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import { useDispatch } from "react-redux";
import { OpenMenu } from "../Utils/appSlice";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchVideoResults, setSearchVideoResult] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OpenMenu());
  }, []);

  useEffect(() => {
    getSearchVideos();
  }, [searchParams.get("q")]);

  const getSearchVideos = async () => {
    const data = await fetch(
      YOUTUBE_VIDEOS_SEARCH_RESULTS + searchParams.get("q")
    );
    const json = await data.json();
    // console.log(json.items);
    setSearchVideoResult(json.items);
  };

  return (
    <div className="font-verela flex w-full h-[90vh] overflow-scroll p-8 flex-col gap-6">
      {searchVideoResults.map((video) => {
        return (
          <Link to={"/watch?v=" + video?.id?.videoId} key={video?.id?.videoId}>
            <SearchCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
