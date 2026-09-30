import express from "express"
import { writeReviewByCollegeId,getReviewById,deleteReviewById, deleteReview, getAllReview } from "../Controllers/review.controller.js"
import adminOnly from "../middleware/route.middleware.js"

const route = express.Router();

route.post("/write", writeReviewByCollegeId);
route.delete("/delete/:_id", adminOnly, deleteReviewById);
route.get("/:collegeId", getReviewById);
route.get("/allreview",getAllReview);
// route.delete("/deletereview",adminOnly ,deleteReview);

export default route