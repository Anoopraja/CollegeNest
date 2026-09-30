// cloudinary.config({ 
//   cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: import.meta.env.CLOUDINARY_API_KEY, 
//   api_secret: import.meta.env.CLOUDINARY_API_SECRET,
//   upload_preset: import.meta.env.CLOUDINARY_UPLOAD_PRESET
// });



// import { cloudinaryConfig } from "./cloudinaryconf.js";



import api from "../Components/api/api.js";

const uploadImage = async (file) => {
  if (!file) {
    throw new Error("No file selected");
  }

  const formData = new FormData();
  formData.append("image", file);

  try {
    const { data } = await api.post("/image/upload", formData);
    return data.data;
  } catch (error) {
    if (error.response?.status !== 404) {
      throw error;
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error("Image upload service is not configured", { cause: error });
    }

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", file);
    cloudinaryFormData.append("upload_preset", uploadPreset);

    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: cloudinaryFormData,
      }
    );
    const cloudinaryData = await cloudinaryResponse.json();

    if (!cloudinaryResponse.ok) {
      throw new Error(
        cloudinaryData.error?.message || "Image upload failed",
        { cause: error }
      );
    }

    return {
      imageUrl: cloudinaryData.secure_url,
      publicId: cloudinaryData.public_id,
    };
  }
};

export default uploadImage;