import express from "express";
import { registerUser,getAllUser,userLogin, userLogout,updateProfile, getCurrentUser } from "../Controllers/user.controller.js"

const route = express.Router();

route.post("/register", registerUser);
route.get("/alluser" ,getAllUser);
route.post("/login", userLogin);
route.post("/logout", userLogout);
route.get("/me", getCurrentUser);
route.post("/updateprofile/:id", updateProfile);
 
export default route;