const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  videoId: String,
  comment: String,
  username: String,
  createdAt: Date,
});

module.exports = mongoose.model("Comment", commentSchema);
