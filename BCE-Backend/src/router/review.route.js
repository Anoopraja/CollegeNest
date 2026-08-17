import { Router } from "express";

import {
    createReview,
    getReviews,
    getCollegeReviews,
    getReviewById,
    updateReview,
    deleteReview
} from "../controllers/review.controller.js";

const router = Router();


router.post("/writereview", createReview);
router.get("/reviews", getReviews);
router.get("/college/:collegeId", getCollegeReviews);
router.get("/:id", getReviewById);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;