import express from "express";
import upload from "../cloudinaryConfig/multer.js";
import { uploadImage, saveImage, getImages, deleteImageById } from "../Controllers/image.controller.js";
import adminOnly from "../middleware/route.middleware.js"

const route = express.Router();

route.post("/upload", upload.single("image"), uploadImage);
route.post("/", saveImage);
route.get("/:collegeId", getImages);
route.delete("/delete/:id",adminOnly , deleteImageById);

export default route;