import Image from "../Models/image.model.js";

const saveImage = async (req, res) => {
    try {
        const { collegeId, imageUrl } = req.body;
        const image = await Image.create({
            collegeId: String(collegeId),
            imageUrl,
            publicId: imageUrl,
            uploadedBy: req.body.userId
        });
        return res.status(201).json({ success: true, data: image });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

const getImages = async (req, res) => {
    const images = await Image.find({ collegeId: String(req.params.collegeId) });
    return res.status(200).json({ success: true, data: images });
};

export { saveImage, getImages };