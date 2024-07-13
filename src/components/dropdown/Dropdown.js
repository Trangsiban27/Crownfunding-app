import React from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative w-full">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
