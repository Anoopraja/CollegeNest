import express from "express";
import { saveImage, getImages, deleteImageById } from "../Controllers/image.controller.js";

const route = express.Router();

route.post("/", saveImage);
route.get("/:collegeId", getImages);
route.delete("/delete/:id", deleteImageById);

export default route;