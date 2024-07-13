import React from "react";

const Label = ({ children, name, className }) => {
  return (
    <label
      htmlFor={name}
      className={`mb-3 font-medium text-md text-text2 dark:text-text3 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
