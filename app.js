const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
const userHandler = require("./handler/user_handler");
const videoHandler = require("./handler/video_handler");
const productHandler = require("./handler/product_handler");
const commentHandler = require("./handler/comment_handler");

app.post("/users", userHandler.createUser);

app.post("/videos", videoHandler.createVideo);
app.get("/videos", videoHandler.getListVideo);

app.post("/products", productHandler.createProduct);
app.get("/products", productHandler.getListProduct);

app.post("/comments", commentHandler.createComment);
app.get("/comments", commentHandler.getListComment);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
