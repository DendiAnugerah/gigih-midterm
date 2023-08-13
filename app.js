const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("./middleware/cors");
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

const port = 5000;

app.use(cors);

app.post("/users", userHandler.createUser);

app.post("/videos", videoHandler.createVideo);
app.get("/videos", videoHandler.getListVideo);

app.post("/products/:videoId", productHandler.createProduct);
app.get("/products/:videoId", productHandler.getListProduct);

app.post("/comments/:videoId", commentHandler.createComment);
app.get("/comments/:videoId", commentHandler.getListComment);

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
