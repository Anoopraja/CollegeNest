import express from "express"
import { registerUser,getAllUser,userLogin, userLogout, getUserById,updateProfile, getCurrentUser } from "../Controllers/user.controller.js"


const route = express.Router();

route.post("/register", registerUser);
route.get("/alluser", getAllUser);
route.post("/login", userLogin);
route.post("/logout", userLogout);
route.get("/me", getCurrentUser);
route.get("/:username", getUserById);
route.post("/updateprofile/:id", updateProfile);


// route.post("/logout", userLogout);

export default route;