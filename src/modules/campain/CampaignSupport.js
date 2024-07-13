import React from "react";
import Button from "../../components/Button";
import SupportCard from "./parts/support/SupportCard";

const CampaignSupport = () => {
  return (
    <div className="w-full max-w-[440px]">
      <h1 className="mb-4 text-lg font-semibold uppercase text-text1">Story</h1>
      <div className="px-6 py-5 text-center rounded-lg shadow-lg mb-[60px]">
        <h1 className="mb-5 text-xl font-medium text-text3">
          Pledge without reward
        </h1>
        <input
          type="text"
          placeholder="10$"
          className="w-full px-5 py-2 mb-5 text-lg bg-transparent border rounded text-text4 border-strock"
        />

        <div className="p-5 bg-[#f6f6f6] rounded-xl text-start mb-5">
          <p className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-sm text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="w-full bg-secondary">Continue</Button>
      </div>
      <div className="flex flex-col gap-y-8">
        {Array(3)
          .fill(0)
          .map((item) => (
            <SupportCard></SupportCard>
          ))}
      </div>
    </div>
  );
};

export default CampaignSupport;
