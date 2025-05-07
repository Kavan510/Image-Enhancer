import React from "react";
import { IoMdAttach } from "react-icons/io";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
    console.log(e.target.files);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center gap-2 w-full h-48 cursor-pointer border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:bg-gray-100 transition"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />
        <IoMdAttach className="text-3xl text-gray-400" />
        <p className="text-sm font-medium">Click or drag to upload image</p>
      </label>
    </div>
  );
};

export default ImageUpload;
