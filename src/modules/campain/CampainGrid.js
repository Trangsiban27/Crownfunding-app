import React from "react";

const CampainGrid = ({ children }) => {
  return <div className="grid grid-cols-4 mb-10 gap-x-7">{children}</div>;
};

export default CampainGrid;
