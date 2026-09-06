export const cloudinaryConfig = {
    cloudName: String(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME),
    apiKey: String(import.meta.env.VITE_CLOUDINARY_API_KEY),
    apiSecret: String(import.meta.env.VITE_CLOUDINARY_API_SECRET),
    uploadPreset: String(import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET),
};
