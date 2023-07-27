const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  fullname: String,
  email: String,
  password: String,
  username: String,
});

module.exports = mongoose.model("User", userSchema);
