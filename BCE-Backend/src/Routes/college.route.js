import express from "express"

import { addCollege, getCollegeById, getAllCollege, updateCollegeData } from "../Controllers/college.controller.js"
import adminOnly from "../middleware/route.middleware.js"

const route = express.Router();

route.get("/", getAllCollege)
route.post("/addcollege",addCollege)
route.patch("/update/:id",adminOnly, updateCollegeData)
route.get("/:slug",getCollegeById)

export default route ;