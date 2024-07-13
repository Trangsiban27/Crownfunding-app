import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-10 w-full bg-white shadow-sm top-full">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
