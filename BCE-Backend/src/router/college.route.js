import { Router } from "express";

import {
    getAllColleges,
    getCollegeById,
    deleteCollegeId,
    updateCollegeId,
    addCollege,
} from "../controllers/college.controller.js";

const router = Router()

router.get("/college", getAllColleges);
router.get("/college/:id", getCollegeById);
router.delete("/college/:id", deleteCollegeId);
router.patch("/college/:id", updateCollegeId);
router.post("/college", addCollege);

export default router;