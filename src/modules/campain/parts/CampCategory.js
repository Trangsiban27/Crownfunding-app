import React from "react";
import IconFolder from "../../../components/icon/IconFolder";

const CampCategory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <div className="flex items-end mb-4">
      <IconFolder></IconFolder>
      <span className={`ml-2 text-text3 ${className}`}>{text}</span>
    </div>
  );
};

export default CampCategory;
