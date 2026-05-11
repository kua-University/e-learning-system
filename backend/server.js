const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/assessments", assessmentRoutes);

app.get("/", (req, res) => {
  res.send("E-Learning Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});