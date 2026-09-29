import express from "express";
import { adminLogin, adminRegister, getCurrentAdmin } from "../Controllers/user.controller.js"

const route = express.Router();

route.post("/adminregister", adminRegister);
route.post("/adminlogin", adminLogin);
route.get("/me", getCurrentAdmin);

export default route;