import express from "express";
import { getAllColleges } from "../controllers/college.controller.js";
import { getCollegeById } from "../controllers/college.controller.js";

const router = express.Router();

router.get("/", getAllColleges);
router.get("/:id", getCollegeById);

export default router;