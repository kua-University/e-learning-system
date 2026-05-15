const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");

const { getCache, setCache } = require("../cache");

// GET COURSES
router.get("/", async (req, res) => {

  try {

    // CHECK REDIS CACHE FIRST
    const cachedCourses = await getCache("courses");

    if (cachedCourses) {
      console.log("Serving courses from Redis cache");
      return res.json(cachedCourses);
    }

    // DATABASE QUERY
    db.all("SELECT * FROM courses", [], async (err, rows) => {

      if (err) {
        return res.status(500).json({ message: err.message });
      }

      // SAVE TO REDIS CACHE
      await setCache("courses", rows, 120);

      console.log("Serving courses from SQLite DB");

      res.json(rows);
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

module.exports = router;