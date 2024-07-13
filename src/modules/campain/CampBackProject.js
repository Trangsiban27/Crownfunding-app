import React, { useState } from "react";
import Button from "../../components/Button";
import SupportCard from "./parts/support/SupportCard";

const CampBackProject = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="absolute z-50 bg-white w-full max-w-[520px] rounded-3xl py-6 px-10 text-center left-2/4 -translate-x-2/4">
      <h1 className="mb-10 text-2xl font-bold text-text1">Back this project</h1>
      <div className="flex flex-col items-start">
        <div className="w-full text-start mb-[60px]">
          <p className="mb-2 text-sm font-medium texto-text2">
            Enter the contribute amount
          </p>
          <input
            type="text"
            placeholder="10$"
            className="w-full px-6 py-4 mb-5 bg-transparent border border-strock rounded-xl"
          />
          <p className="mb-5">Contribution are not associatied with perks</p>

          <Button className="text-sm font-semibold px-11">Continue</Button>
        </div>
        <div className="flex flex-col w-full gap-y-10">
          <div className="flex flex-col gap-y-6">
            <SupportCard className="text-start"></SupportCard>
            <Button className="w-full bg-secondary">Get this perk</Button>
          </div>
          <div className="flex flex-col gap-y-6">
            <SupportCard className="text-start"></SupportCard>
            <Button className="w-full bg-secondary">Get this perk</Button>
          </div>
          <div className="flex flex-col gap-y-6">
            <SupportCard className="text-start"></SupportCard>
            <Button className="w-full bg-secondary">Get this perk</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampBackProject;
