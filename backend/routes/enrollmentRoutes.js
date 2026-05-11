const express = require("express");
const router = express.Router();
const db = require("../db");

// ENROLL
router.post("/", (req, res) => {
  const { userId, courseId } = req.body;

  const sql = `INSERT INTO enrollments (userId, courseId) VALUES (?, ?)`;

  db.run(sql, [userId, courseId], function (err) {
    if (err) return res.status(500).json({ message: err.message });

    res.json({ message: "Enrolled successfully" });
  });
});

// GET MY COURSES
router.get("/my/:userId", (req, res) => {
  const sql = `
    SELECT courses.*
    FROM courses
    JOIN enrollments ON courses.id = enrollments.courseId
    WHERE enrollments.userId = ?
  `;

  db.all(sql, [req.params.userId], (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });

    res.json(rows);
  });
});

module.exports = router;