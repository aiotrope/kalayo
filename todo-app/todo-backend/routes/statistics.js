const express = require("express");
const { Todo } = require("../mongo");
const redis = require("../redis/index");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const c = await redis.getAsync("add");
    res.status(200).json({ added_todos: c });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
