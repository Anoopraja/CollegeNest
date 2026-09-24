import express from "express"
import {  addCollege, getCollegeById, getAllCollege } from "../Controllers/college.controller.js"

const route = express.Router();

// route.post("/updatecollege",updateCollegeData)
route.post("/addcollege",addCollege)
route.get("/:slug",getCollegeById)
route.get("/", getAllCollege)



export default route ;