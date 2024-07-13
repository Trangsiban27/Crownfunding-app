import React from "react";
import Button from "../../components/Button";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="mr-12" />
        <DashboardSearch></DashboardSearch>
      </div>
      <div className="flex items-center gap-x-10">
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8.293L13.707 12.586L9.707 8.586L2 16.293L3.414 17.707L9.707 11.414L13.707 15.414L19.414 9.707L21.707 12V6H15.707L18 8.293Z"
              fill="#A2A2A8"
            />
          </svg>
          <span className="mx-3">Fundrising for</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6L11 1" stroke="#A2A2A8" stroke-width="2" />
          </svg>
        </div>

        <Button href="/campaign-add-new" className="px-6 bg-secondary">
          Start a campain
        </Button>

        <div className="w-[52px] h-[52px] rounded-full">
          <img src="/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
