const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  link: String,
  imageUrl: String,
  title: String,
  price: String,
  videoId: String,
});

module.exports = mongoose.model("Product", productSchema);
