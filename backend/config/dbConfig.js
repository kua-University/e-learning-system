const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

// Create database directory if missing
const dbDir = path.join(__dirname, "..", "database");

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Database path
const dbPath = path.join(dbDir, "elearning.db");

// Connect database
const db = new Database(dbPath);

console.log("SQLite connected successfully");

module.exports = db;