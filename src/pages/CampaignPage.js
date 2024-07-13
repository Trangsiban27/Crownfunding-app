import React, { Fragment, useEffect, useState } from "react";
import Button from "../components/Button";
import Heading from "../components/common/Heading";
import CampaignFeature from "../modules/campain/CampaignFeature";
import { v4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaign = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/campaigns");

        console.log(response.data);
        setCampaigns(response.data);
      } catch (error) {
        toast.error("Can not get campaign");
      }
    };

    getCampaign();
  }, []);

  return (
    <Fragment>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-2xl">
        <div className="flex items-start gap-x-6">
          <div className="w-[54px] h-[54px] rounded-full bg-secondary flex items-center justify-center bg-opacity-60 cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-2xl font-bold text-text1">
              Create Your Campaign
            </span>
            <span className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </span>
            <span className="text-sm text-primary">
              Need any help? Learn More...
            </span>
          </div>
        </div>
        <Button
          type="button"
          className="py-3 text-lg font-semibold text-secondary bg-secondary bg-opacity-60 px-7"
        >
          Create campaign
        </Button>
      </div>
      <Heading text="Your campaign" number="4"></Heading>
      <div className="my-4">
        {campaigns.map((item) => (
          <CampaignFeature key={item.id} props={item}></CampaignFeature>
        ))}
      </div>

      <Button
        type="button"
        className="px-12 py-3 mx-auto font-semibold text-secondary bg-secondary bg-opacity-60"
      >
        See more
      </Button>
    </Fragment>
  );
};

export default CampaignPage;
