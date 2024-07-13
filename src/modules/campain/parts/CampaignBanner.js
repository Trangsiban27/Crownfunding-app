import React from "react";

const CampaignBanner = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full mb-10">
      <span>{children}</span>
      <img src="/banner.png" alt="" className="w-full" />
    </div>
  );
};

export default CampaignBanner;
