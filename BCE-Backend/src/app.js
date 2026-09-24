import express from "express";
import userRoute from "./Routes/user.route.js"
import collegeRoute from "./Routes/college.route.js"
// import reviewRoute from "./Routes/review.route.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute)
app.use("/college", collegeRoute)
// app.use("/review",reviewRoute)


export default app;