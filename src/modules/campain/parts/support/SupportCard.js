import React from "react";

const SupportCard = ({ image = "/main-img.png", className }) => {
  return (
    <div
      className={`w-full max-w-[440px] rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <img src={image} alt="" className="w-full h-[232px]" />
      <div className="p-5">
        <span className="px-4 py-2 rounded-[2px] text-sm text-white bg-secondary">
          Feature
        </span>

        <div className="mt-5">
          <h1 className="mb-2 text-xl font-semibold text-text1">
            Special One Camera
          </h1>
          <p className="mb-5 text-xl font-bold text-text1">
            $2,724 USD{" "}
            <span className="text-[#EB5757] text-sm font-medium ml-2">
              <span className="">$1,504 USD</span> (12% OFF)
            </span>
          </p>
          <div className="mb-5">
            <p className="text-lg font-medium text-text1">Estimated Shipping</p>
            <p>October 2022</p>
          </div>

          <p className="mb-5 text-lg text-text2">
            <span className="font-semibold text-text1">05</span> claimed
          </p>

          <p className="text-lg text-text2">Ships worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
