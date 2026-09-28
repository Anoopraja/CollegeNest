import express from "express"

import { addCollege, getCollegeById, getAllCollege, updateCollegeData } from "../Controllers/college.controller.js"

const route = express.Router();

route.post("/update/:id",updateCollegeData)
route.post("/addcollege",addCollege)
route.get("/:slug",getCollegeById)
route.get("/", getAllCollege)



export default route ;