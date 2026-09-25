import express from "express"
import { writeReviewByCollegeId } from "../Controllers/review.controller.js"

const route = express.Router();

route.post("/write", writeReviewByCollegeId);

export default route