// cloudinary.config({ 
//   cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: import.meta.env.CLOUDINARY_API_KEY, 
//   api_secret: import.meta.env.CLOUDINARY_API_SECRET,
//   upload_preset: import.meta.env.CLOUDINARY_UPLOAD_PRESET
// });



// import { cloudinaryConfig } from "./cloudinaryconf.js";



const uploadImage = async (file) => {

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  // console.log("Cloud Name:", cloudName);
  // console.log("Upload Preset:", uploadPreset);

  if (!file) {
    throw new Error("No file selected");
  }


  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    uploadPreset
  );

  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Upload failed");
  }



  return data.secure_url;
};

export default uploadImage;