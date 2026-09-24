import express from "express"
import { registerUser,getAllUser,userLogin, userLogout, getUserById,updateProfile } from "../Controllers/user.controller.js"


const route = express.Router();

route.post("/register", registerUser);
route.get("/alluser", getAllUser);
route.post("/login", userLogin);
route.post("/logout", userLogout);
route.get("/:username", getUserById);
route.post("/updateprofile/:id", updateProfile);


// route.post("/logout", userLogout);

export default route;