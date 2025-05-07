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

    //call the api for image
    try {
      const enhanedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhanedURL);
      setloading(false);
    } catch (e) {
      console.log("Errror in home jsx enhanced image part");
    }
  };
  // console.log("Enhanced image: ", enhancedImage.image);

  return (
    <div className="">
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
