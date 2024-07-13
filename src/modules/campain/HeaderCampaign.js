import React from "react";
import { v4 } from "uuid";
import CampCategory from "./parts/CampCategory";
import IconFace from "../../components/icon/IconFace";
import IconX from "../../components/icon/IconX";
import IconShare from "../../components/icon/IconShare";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import Button from "../../components/Button";
import CampRate from "./parts/CampRate";

const HeaderCampaign = () => {
  return (
    <div className="flex items-start gap-x-10">
      <div className="w-1/2">
        <img src="/main-img.png" alt="" className="w-full mb-8" />
        <div className="flex items-center justify-center gap-x-5">
          {Array(4)
            .fill(0)
            .map((item) => (
              <div
                key={v4()}
                className="w-[90px] h-[70ox] rounded-xl overflow-hidden"
              >
                <img src="/main-img.png" alt="" />
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1 max-w-[450px]">
        <div className="flex justify-between">
          <CampCategory></CampCategory>
          <div className="flex items-center gap-x-4">
            <IconFace></IconFace>
            <IconX></IconX>
            <IconShare></IconShare>
          </div>
        </div>
        <CampTitle className="my-4 text-xl font-bold text-text1">
          Meet - AI Virtual Background 4K Webcam
        </CampTitle>
        <CampDesc className="text-sm text-3">
          The first-ever 4K webcam that embeded AI technology to protect your
          background during video calls.
        </CampDesc>
        <div className="flex my-6 gap-x-5">
          <img src="/avatar.png" alt="" className="w-[60px]" />
          <div>
            <div className="flex items-center gap-x-4">
              <span className="text-lg font-medium text-tex1">
                Saiful Islam
              </span>
              <CampRate number={5}></CampRate>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-sm font-bold text-primary">
                02 Campaign
              </span>
              <span>
                <svg
                  width={6}
                  height={6}
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={3} cy={3} r={3} fill="#808191" />
                </svg>
              </span>
              <span className="text-sm text-text3">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[5px] rounded-full border border-[#EFEFEF] bg-[#EFEFEF] mb-5">
          <div className="w-3/4 h-full rounded-full bg-primary opacity-80"></div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <CampMeta text="$2,000" desc="Raised of $2,500"></CampMeta>
          <CampMeta text="173" desc="Total backers"></CampMeta>
          <CampMeta text="30" desc="Days left"></CampMeta>
        </div>
        <Button className="w-full">Back this project</Button>
      </div>
    </div>
  );
};

export default HeaderCampaign;
