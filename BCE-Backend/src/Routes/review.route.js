import express from "express"
import { writeReviewByCollegeId,getReviewById,deleteReviewById } from "../Controllers/review.controller.js"

const route = express.Router();

route.post("/write", writeReviewByCollegeId);
route.delete("/delete/:_id", deleteReviewById);
route.get("/:collegeId", getReviewById);

export default route