import React from "react";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";

const CampainItems = () => {
  return (
    <div className="max-w-[290px] rounded-2xl overflow-hidden shadow-md bg-white mt-5">
      <img
        src="https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-[160px] rounded-2xl"
      />
      <div className="px-5 py-4">
        <CampCategory></CampCategory>

        <CampTitle className="mb-1 text-base font-semibold text-text1">
          Powered Kits Learning Boxes
        </CampTitle>

        <CampDesc className="mb-4 text-xs">
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>

        <div className="flex items-center justify-between mb-5 ">
          <CampMeta
            text="$2,000"
            desc="Raised of $1,900"
            small="text-xs"
          ></CampMeta>
          <CampMeta text="173" desc="Total backers" small="text-xs"></CampMeta>
        </div>

        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampainItems;
