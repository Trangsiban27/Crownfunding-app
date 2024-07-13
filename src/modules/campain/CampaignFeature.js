import React from "react";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignFeature = ({ props }) => {
  return (
    <div className="flex items-center mt-3 mb-8 gap-x-8">
      <img
        src={props.url || "https://i.ibb.co/NV65J26/main-img.png"}
        alt=""
        className="flex-1 rounded-3xl max-w-[583px] h-[265px]"
      />

      <div className="flex-1 max-w-[435px]">
        <CampCategory text={props.category}></CampCategory>
        <CampTitle className="text-xl font-bold">{props.title}</CampTitle>
        <CampDesc className="mt-5 mb-4 text-ms">
          {props.short_description}
        </CampDesc>
        <div className="w-full h-[5px] rounded-full border border-[#EFEFEF] bg-[#EFEFEF] mb-5">
          <div className="w-3/4 h-full rounded-full bg-primary opacity-80"></div>
        </div>
        <div className="flex items-center justify-between">
          <CampMeta text="$2,000" desc="Raised of $2,500"></CampMeta>
          <CampMeta text="173" desc="Total backers"></CampMeta>
          <CampMeta text="30" desc="Days left"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
