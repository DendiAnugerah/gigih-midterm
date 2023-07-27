const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  id: String,
  thumbnail: String,
  title: String,
});

module.exports = mongoose.model("Video", videoSchema);
