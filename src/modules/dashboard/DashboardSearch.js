import React, { useState } from "react";
import IconClose from "../../components/icon/IconClose";
import SearchItem from "../search/SearchItem";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <div className="flex pr-2 py-2 bg-white w-full max-w-[450px] rounded-full items-center shadow-xl relative mb-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="flex-1 px-5 bg-transparent outline-none"
        />
        <div className="px-6 py-2 text-white rounded-full bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {showSearch && (
        <div className="w-full max-w-[845px] bg-white rounded-2xl z-50 absolute overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-6 py-4 bg-graySoft">
            <span className="text-sm font-medium">
              See all 10,124 fundraisier
            </span>

            <div className="py-4 px-7 bg-[#F9E3E3] rounded-lg">
              <IconClose></IconClose>
            </div>
          </div>
          <div className="flex flex-col px-6 py-5 bg-white gap-y-5">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
          </div>
          <div className="p-6">
            <p className="mb-3 font-semibold text-text1 text-ms">
              Related searchs
            </p>
            <div className="flex flex-col text-sm gap-y-2">
              <span className="text-text2">education fund</span>
              <span className="text-text3">education fund</span>
              <span className="text-text3">education fund</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSearch;
