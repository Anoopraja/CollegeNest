import Image from "../Models/image.model.js";
import cloudinary from "../cloudinaryConfig/cloudinaryConfig.js";

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }

        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "collegenest/gallery",
                    resource_type: "image"
                },
                (error, uploadedFile) => {
                    if (error) {
                        reject(error);
                        return;
                    }

                    resolve(uploadedFile);
                }
            );

            stream.end(req.file.buffer);
        });

        return res.status(201).json({
            success: true,
            data: {
                imageUrl: result.secure_url,
                publicId: result.public_id
            }
        });
    } catch (error) {
        console.error("Image upload error:", error);
        return res.status(500).json({
            success: false,
            message: error.message || "Image upload failed"
        });
    }
};

const saveImage = async (req, res) => {
    try {
        const { collegeId, imageUrl, publicId } = req.body;
        if (!collegeId || !imageUrl) {
            return res.status(400).json({
                success: false,
                message: "College ID and image URL are required"
            });
        }

        const image = await Image.create({
            collegeId: String(collegeId),
            imageUrl,
            publicId: publicId || imageUrl,
            uploadedBy: req.body.userId
        });
        return res.status(201).json({ success: true, data: image });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

const deleteImageById = async (req, res) => {
    try {

        const { id } = req.params;

        const deleteImage = await Image.deleteOne({ _id: id });
        if (deleteImage.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Image nahi mila"
            });
        }
        return res.status(200).json({
            success: true,
            message: "apka falane college ka Image delete ho chuka hai",
            data: deleteImage
        })

    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "apka Image delete nhi hua ak baar try check kro!"
        })
    }
}


const getImages = async (req, res) => {
    const images = await Image.find({ collegeId: String(req.params.collegeId) });
    return res.status(200).json({ success: true, data: images });
};

export { uploadImage, saveImage, getImages, deleteImageById };