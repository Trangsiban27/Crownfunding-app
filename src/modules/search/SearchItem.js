import React from "react";
import { imageDefault } from "../../contants/Global";

const SearchItem = ({
  image = imageDefault,
  text = "Education fund for Durgham Family",
  author = "Durgham Family",
}) => {
  return (
    <div className="flex items-center gap-x-5">
      <img src={image} alt="" className="w-[50px] h-[50px] rounded-lg" />
      <div className="flex flex-col">
        <span className="mb-2 text-xs text-text1">{text}</span>
        <span className="text-xs text-text3">By {author}</span>
      </div>
    </div>
  );
};

export default SearchItem;
