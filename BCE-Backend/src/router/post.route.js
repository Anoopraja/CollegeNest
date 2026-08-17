import { router } from "express";

import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} from "../controllers/post.controller.js";

const router = Router();

router.post("/post", createPost);
router.get("/posts", getPosts);
router.get("/post/:id", getPostById);
router.patch("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;