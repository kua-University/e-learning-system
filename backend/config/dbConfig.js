const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/elearning.db", (err) => {
  if (err) {
    console.log("DB Error:", err.message);
  } else {
    console.log("SQLite connected");
  }
});

module.exports = db;