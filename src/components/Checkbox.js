import React from "react";

const Checkbox = ({ checked = false, onClick = () => {} }) => {
  return (
    <div
      className={`inline-flex items-center justify-center p-1 text-white  w-5 h-5 border rounded cursor-pointer border-text4 dark:border-text3 ${
        checked
          ? "border-primary bg-primary dark:text-white"
          : " dark:text-darkSecondary"
      }`}
      onClick={onClick}
    >
      <input type="checked" className="hidden" name="term" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
