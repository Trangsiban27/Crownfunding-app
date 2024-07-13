import React from "react";
import { imageDefault } from "../../../contants/Global";

const CampAuthor = ({ image = imageDefault, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center">
      <img src={image} alt="" className="w-[30px] mr-2" />
      <span className="text-xs text-text3">
        by <span className="text-xs font-semibold text-text2">{author}</span>
      </span>
    </div>
  );
};

export default CampAuthor;
