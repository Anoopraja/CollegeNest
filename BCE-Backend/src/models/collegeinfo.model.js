import mongoose from "mongoose";

const collegeInfoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },

    shortName: String,
    district: String,
    established: Number,
    type: String,
    university: String,
    approval: String,
    campus: String,

    rating: Number,

    image: String,
    location: String,
    website: String,
    email: String,
    phone: String,

    about: String,

    branches: [String],
    facilities: [String],

    // If you have gallery images
    gallery: [String],
}, { timestamps: true });

const CollegeInfo = mongoose.model("CollegeInfo", collegeInfoSchema);

export default CollegeInfo;