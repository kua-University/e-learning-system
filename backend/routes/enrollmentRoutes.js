const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { userId, courseId } = req.body;

  db.run(
    "INSERT INTO enrollments (userId, courseId) VALUES (?, ?)",
    [userId, courseId],
    function (err) {
      if (err) return res.status(500).send(err);
      res.send({ message: "Enrolled successfully" });
    }
  );
});

module.exports = router;