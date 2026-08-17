import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
    },

    branch: {
      type: String,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    images: [
      {
        type: String,
      },
    ],

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },{timestamps: true});

const Post = mongoose.model("Post", postSchema);

export default Post;
