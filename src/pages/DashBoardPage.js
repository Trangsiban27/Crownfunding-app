import React, { Fragment } from "react";
import Heading from "../components/common/Heading";
import CampainGrid from "../modules/campain/CampainGrid";
import CampainItems from "../modules/campain/CampainItems";
import { v4 } from "uuid";
import CampaignFeature from "../modules/campain/CampaignFeature";

const DashBoardPage = () => {
  return (
    <Fragment>
      <Heading number="4" text="Your campain"></Heading>
      {/* <CampaignFeature></CampaignFeature> */}
      <Heading text="Popular campain"></Heading>
      <CampainGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampainItems key={v4()}></CampainItems>
          ))}
      </CampainGrid>
      <Heading text="Recent Campaign"></Heading>
      <CampainGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampainItems key={v4()}></CampainItems>
          ))}
      </CampainGrid>
    </Fragment>
  );
};

export default DashBoardPage;
