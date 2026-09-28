import express from "express";
import { adminLogin, adminRegister } from "../Controllers/user.controller.js"

const route = express.Router();

route.post("/adminregister", adminRegister);
route.post("/adminlogin", adminLogin);

export default route;