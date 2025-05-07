const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

import axios from "axios";
const enhancedImageAPI = async (file) => {
  //code to call API and get enhanced image url
  try {
    //code to upload image
    const taskId = await uploadImage(file);
    console.log("taskid is: " + taskId);
    const enhandedImageData = await pollingForImage(taskId);

    //fetch  enhanced image
    console.log("enhandedImageData", enhandedImageData);

    return enhandedImageData;
  } catch (e) {
    console.log("Error in image upload or enhancing image:" + e);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("image_file", file);

  //  /api/tasks/visual/scale";
  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  console.log(data);

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  return data.data;
};

const pollingForImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);
  if (result.state === 4) {
    console.log("Processing.........");
    if (retries >= 10) {
      throw new Error("Max retires expires");
    }
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return pollingForImage(taskId, retries + 1);
  }
  console.log("from plling fun " + result);

  return result;
};

export default enhancedImageAPI;
