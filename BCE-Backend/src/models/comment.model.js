import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
  },{timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;