import axios from "axios";
import React from "react";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;

    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=2fc2a068ceac6ff6fd332feba1fc3fad",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const imageData = response.data.data;
    console.log(imageData);

    const imageObj = {
      url: imageData.url,
    };

    onChange(name, imageObj);
  };
  return (
    <label className="flex items-center justify-center w-full h-[200px] border border-gray-200 border-dashed rounded-xl cursor-pointer">
      <input
        type="file"
        onChange={handleUploadImage}
        className="hidden"
      ></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
