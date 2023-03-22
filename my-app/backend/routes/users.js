const express = require("express");
const User = require("../mongo/models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
});

router.post("/", async (req, res) => {

  const user = new User({
    username: req.body.username,
  });

  const newUser = await User.create(user);
  res.status(201).json(newUser);
});

module.exports = router;
