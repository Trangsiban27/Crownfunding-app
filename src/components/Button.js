import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  href = "",
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  if (href) {
    return (
      <Link
        to={href}
        className={`flex items-center justify-center py-4 text-base text-white bg-primary rounded-xl font-semibold min-h-[56px] ${className}`}
      >
        {child}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`flex items-center justify-center py-4 text-base text-white bg-primary rounded-xl font-semibold min-h-[56px] ${className}`}
    >
      {child}
    </button>
  );
};

export default Button;
