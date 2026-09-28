import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            match: [/^[a-z0-9_]+$/, "Username can only contain letters, numbers and underscore"],
            trim: true,
            lowercase: true
        },

        gmail: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true

        },

        college: {
            type: String,
            default: ""
        },

        branch: {
            type: String,
            default: ""
        },

        year: {
            type: String,
            default: ""
        },

        profileImage: {
            type: String,
            default: ""
        },

        bio: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;