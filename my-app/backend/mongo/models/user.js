const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    trim: true,
    unique: true,
    required: true
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
