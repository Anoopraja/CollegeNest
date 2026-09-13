import express from 'express'
import collegeRoutes from './routes/college.route.js'

const app = express()

app.get("/", (req, res) => {
  res.json({
    message: "CollegeNest API is running",
  });
});


app.use("/api/colleges", collegeRoutes);
app.use("/api/colleges/:id", collegeRoutes);

export default app