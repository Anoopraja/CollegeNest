import express from "express"
import { writeReview } from "../Controllers/review.controller.js"

const route = express.Router();

route.post("/write", writeReview);

export default route