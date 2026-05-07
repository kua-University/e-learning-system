const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { title } = req.body;

  db.run("INSERT INTO courses (title) VALUES (?)", [title], function (err) {
    if (err) return res.status(500).send(err);
    res.send({ id: this.lastID, title });
  });
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM courses", [], (err, rows) => {
    res.send(rows);
  });
});

module.exports = router;