import React from "react";
import Button from "../../../components/Button";

const CampMiddlebar = () => {
  return (
    <div className="flex items-center justify-center my-[70px] w-full mb-6">
      <div className="flex items-center justify-between w-full px-10 py-5 shadow-sm">
        <div className="flex items-center gap-x-14">
          <span className="text-sm font-semibold text-secondary">Campaign</span>
          <span className="text-sm font-semibold">Risk</span>
          <span className="text-sm font-semibold">FAQ</span>
          <span className="text-sm font-semibold">Updates</span>
          <span className="text-sm font-semibold">Content</span>
        </div>
        <Button className="px-8">Back this project</Button>
      </div>
    </div>
  );
};

export default CampMiddlebar;
