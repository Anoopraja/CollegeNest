import express from "express"
import { writeReviewByCollegeId,getReviewById } from "../Controllers/review.controller.js"

const route = express.Router();

route.post("/write", writeReviewByCollegeId);
route.get("/:collegeId", getReviewById);

export default route