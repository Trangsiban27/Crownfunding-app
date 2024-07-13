import React from "react";
import IconStar from "../../../components/icon/IconStar";

const CampRate = ({ number }) => {
  return (
    <div className="flex items-center gap-x-1">
      {Array(number)
        .fill(0)
        .map((item) => (
          <IconStar></IconStar>
        ))}
    </div>
  );
};

export default CampRate;
