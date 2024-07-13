import React from "react";

const StoryCard = ({ children, image = "/main-img.png" }) => {
  return (
    <div className="mb-9">
      <img src={image} alt="" className="max-w-[605] w-full" />
      <div className="px-8 py-5">{children}</div>
    </div>
  );
};

export default StoryCard;
