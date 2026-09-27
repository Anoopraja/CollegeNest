import express from "express";
import userRoute from "./Routes/user.route.js"
import collegeRoute from "./Routes/college.route.js"
import reviewRoute from "./Routes/review.route.js"
import imageRoute from "./Routes/image.route.js"
import cookieParser from "cookie-parser"
<<<<<<< Updated upstream
import cors from "cors"
=======
import cors from "cors";
>>>>>>> Stashed changes

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
<<<<<<< Updated upstream
    origin: [
        "http://localhost:5173",
        "https://collegenest.anooplofi.me"
    ],
    credentials: true
}));

=======
    origin: "http://localhost:5173",
    credentials: true
}));
>>>>>>> Stashed changes
app.use("/user", userRoute)
app.use("/college", collegeRoute)
app.use("/review",reviewRoute)  
app.use("/image", imageRoute)


export default app;