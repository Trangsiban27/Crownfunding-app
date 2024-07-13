import React, { Fragment, useState } from "react";
import CampaignBanner from "./parts/CampaignBanner";
import HeaderCampaign from "./HeaderCampaign";
import CampMiddlebar from "./parts/CampMiddlebar";
import CampaignStory from "./CampaignStory";
import CampaignSupport from "./CampaignSupport";
import Heading from "../../components/common/Heading";
import CampainItems from "./CampainItems";

const CampaignView = () => {
  return (
    <Fragment>
      {/* <div className="fixed inset-0 z-40 bg-opacity-50 bg-text1 overlay"></div>
      <CampBackProject></CampBackProject> */}
      <CampaignBanner></CampaignBanner>
      <HeaderCampaign></HeaderCampaign>
      <CampMiddlebar></CampMiddlebar>
      <div className="flex items-start justify-between">
        <CampaignStory></CampaignStory>
        <CampaignSupport></CampaignSupport>
      </div>
      <Heading text="You also may be interested in" className="my-5"></Heading>
      <div className="flex items-center gap-x-8">
        <CampainItems></CampainItems>
        <CampainItems></CampainItems>
        <CampainItems></CampainItems>
        <CampainItems></CampainItems>
      </div>
    </Fragment>
  );
};

export default CampaignView;
