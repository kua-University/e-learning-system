const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollRoutes = require("./routes/enrollmentRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});