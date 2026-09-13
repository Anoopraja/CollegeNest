import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        shortName: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            required: true,
        },

        district: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        established: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },

        type: {
            type: String,
            required: true,
        },

        ownership: {
            type: String,
        },

        university: {
            type: String,
        },

        approval: {
            type: String,
        },

        campus: {
            type: String,
        },

        website: {
            type: String,
        },

        email: {
            type: String,
        },

        phone: {
            type: String,
        },

        image: {
            type: String,
        },

        logo: {
            type: String,
        },

        rating: {
            type: Number,
        },

        admission: {
            type: String,
        },

        about: {
            type: String,
        },

        branches: {
            type: [String],
        },

        facilities: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

const College = mongoose.model(
    "College",
    collegeSchema,
    "college_data"
);
export default College;