import express from "express";
import { adminLogin, adminRegister, getCurrentAdmin } from "../Controllers/user.controller.js"
import { userLogin } from "../Controllers/user.controller.js"
import adminOnly from "../middleware/route.middleware.js"


const route = express.Router();

route.post("/adminregister", adminRegister);
// route.post("/userlogin",  userLogin);
route.get("/me",adminOnly ,getCurrentAdmin);

export default route;