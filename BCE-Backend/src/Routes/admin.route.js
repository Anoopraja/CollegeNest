import express from "express";
import { adminLogin, adminRegister, getCurrentAdmin } from "../Controllers/user.controller.js"
import adminOnly from "../middleware/route.middleware.js"


const route = express.Router();

route.post("/adminregister", adminRegister);
route.post("/adminlogin",adminOnly ,adminLogin);
route.get("/me",adminOnly ,getCurrentAdmin);

export default route;