const express = require("express");
const mongoose = require("mongoose");
const port = 3000;

const app = express();

mongoose.connect("mongodb://localhost/url-shortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected!");
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
