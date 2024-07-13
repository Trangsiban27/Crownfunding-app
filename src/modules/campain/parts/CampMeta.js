import React from "react";

const CampMeta = ({ text, desc, small }) => {
  return (
    <div>
      <p
        className={`font-semibold text-text2 ${small ? "text-sm" : "text-xl"}`}
      >
        {text}
      </p>
      <span className={`text-text4 ${small ? "text-xs" : "text-sm"}`}>
        {desc}
      </span>
    </div>
  );
};

export default CampMeta;
