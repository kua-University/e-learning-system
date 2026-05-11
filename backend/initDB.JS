const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const db = new sqlite3.Database("./database/elearning.db");

const sql = fs.readFileSync("./database/init.sql", "utf8");

db.exec(sql, (err) => {
  if (err) {
    console.log("Error creating tables:", err.message);
  } else {
    console.log("Database initialized successfully");
  }
});

db.close();