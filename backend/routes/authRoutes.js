const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;

  db.run(sql, [name, email, password], function (err) {
    if (err) return res.status(500).json({ message: err.message });

    res.json({ message: "User registered" });
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.get(sql, [email, password], (err, user) => {
    if (err) return res.status(500).json({ message: err.message });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token: "dummy-token"
    });
  });
});

module.exports = router;