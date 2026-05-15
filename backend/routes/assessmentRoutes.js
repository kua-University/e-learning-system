const express = require("express");
const router = express.Router();
require("../config/dbConfig")

// GET ALL
router.get("/", (req, res) => {
  db.all("SELECT * FROM assessments", [], (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });

    res.json(rows);
  });
});

// ADD
router.post("/", (req, res) => {
  const { title, courseId } = req.body;

  const sql = `INSERT INTO assessments (title, courseId) VALUES (?, ?)`;

  db.run(sql, [title, courseId], function (err) {
    if (err) return res.status(500).json({ message: err.message });

    res.json({ message: "Assessment added" });
  });
});

module.exports = router;