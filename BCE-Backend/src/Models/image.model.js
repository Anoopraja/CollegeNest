import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: true
        },

        collegeId: {
            type: String,
            required: true
        },

        publicId: {
            type: String,
            required: true
        },

        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;