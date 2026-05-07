const express = require("express");
const router = express.Router();
const db = require("../db");

// REGISTER
router.post("/register", (req, res) => {
  const { name, password } = req.body;

  db.run(
    "INSERT INTO users (name, password) VALUES (?, ?)",
    [name, password],
    function (err) {
      if (err) return res.status(500).send(err);
      res.send({ message: "User registered" });
    }
  );
});

// LOGIN
router.post("/login", (req, res) => {
  const { name, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE name = ? AND password = ?",
    [name, password],
    (err, user) => {
      if (err) return res.status(500).send(err);

      if (!user) {
        return res.status(401).send({ message: "Invalid credentials" });
      }

      res.send({ user });
    }
  );
});

module.exports = router;