import React, { useState } from "react";
import ImagePreview from "./ImagePreview.jsx";
import ImageUpload from "./ImageUpload.jsx";
import enhancedImageAPI from "../utils/enhancedImageAPI.js";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);

    try {
      const enhanedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhanedURL);
      setloading(false);
    } catch (e) {
      console.log("Error in Home.jsx enhanced image part");
      setloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-10">
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </div>
  );
};

export default Home;
