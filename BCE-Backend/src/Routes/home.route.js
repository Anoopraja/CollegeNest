import express from "express";

const app = express.Router();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BCE Backend is running",
  });
});

export default app;