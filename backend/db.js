const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./elearning.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      courseId INTEGER
    )
  `);
});

module.exports = db;