import React from "react";

const TextHighlight = ({ children, className }) => {
  return <span className={`font-semibold ${className}`}>{children}</span>;
};

export default TextHighlight;
