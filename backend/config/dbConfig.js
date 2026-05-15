const Database = require("better-sqlite3");
const path = require("path");

// Database path
const dbPath = path.join(__dirname, "database", "elearning.db");

// Connect database
const db = new Database(dbPath);

// Success message
console.log("SQLite connected successfully");

// Create tables if not exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    price REAL
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    courseId INTEGER,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

module.exports = db;