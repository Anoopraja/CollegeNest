import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            // required: true,
            unique: true
        },

        name: {
            type: String,
            // required: true,
            trim: true
        },

        shortName: {
            type: String,
            // required: true,
            trim: true
        },

        slug: {
            type: String,
            // required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        district: {
            type: String,
            // required: true,
            trim: true
        },

        address: {
            type: String,
            // required: true,
            trim: true
        },

        location: {
            type: String,
            // required: true,
            trim: true
        },

        state: {
            type: String,
            // required: true,
            trim: true
        },

        established: {
            type: Number,
            // required: true
        },

        type: {
            type: String,
            // required: true,
            trim: true
        },

        ownership: {
            type: String,
            // required: true,
            trim: true
        },

        university: {
            type: String,
            // required: true,
            trim: true
        },

        approval: {
            type: String,
            // required: true,
            trim: true
        },

        campus: {
            type: String,
            trim: true
        },

        website: {
            type: String,
            trim: true
        },

        email: {
            type: String,
            trim: true,
            lowercase: true
        },

        phone: {
            type: String,
            trim: true
        },

        image: {
            type: String,
            trim: true
        },

        logo: {
            type: String,
            trim: true
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },

        admission: {
            type: String,
            trim: true
        },

        about: {
            type: String,
            trim: true
        },

        branches: [
            {
                type: String,
                trim: true
            }
        ],

        facilities: [
            {
                type: String,
                trim: true
            }
        ]
    },
    {
        timestamps: true
    }
);

const College = mongoose.model("College", collegeSchema);

export default College;