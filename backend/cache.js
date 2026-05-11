const redis = require("redis");

// Create client (safe fallback mode)
let client;

try {
  client = redis.createClient();

  client.on("error", (err) => {
    console.log("Redis not available, using fallback cache");
  });

  client.connect();
} catch (err) {
  console.log("Redis disabled");
}

// SIMPLE MEMORY FALLBACK
const memoryCache = new Map();

// SET CACHE
const setCache = async (key, value, ttl = 60) => {
  try {
    if (client?.isOpen) {
      await client.setEx(key, ttl, JSON.stringify(value));
    } else {
      memoryCache.set(key, value);
    }
  } catch {
    memoryCache.set(key, value);
  }
};

// GET CACHE
const getCache = async (key) => {
  try {
    if (client?.isOpen) {
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } else {
      return memoryCache.get(key);
    }
  } catch {
    return memoryCache.get(key);
  }
};

module.exports = { setCache, getCache };