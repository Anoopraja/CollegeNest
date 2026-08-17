import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
    },

    branch: {
      type: String,
      trim: true,
    },
  },{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;