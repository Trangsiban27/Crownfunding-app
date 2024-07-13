import React from "react";

const Heading = ({ text, number, className }) => {
  return (
    <h2 className={`text-lg font-semibold text-text1 ${className}`}>
      <span>{text}</span>
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
