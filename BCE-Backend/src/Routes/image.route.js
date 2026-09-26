import express from "express";
import { saveImage, getImages } from "../Controllers/image.controller.js";

const route = express.Router();

route.post("/", saveImage);
route.get("/:collegeId", getImages);

export default route;