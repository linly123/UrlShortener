const mongoose = require("mongoose");
const Url = require("../url");

mongoose.connect("mongodb://localhost/url-shortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  Url.create(
    { url: "https://www.google.com", shortNumber: "667yy" },
    { url: "https://www.facebook.com", shortNumber: "6yr12" }
  ).then(() => {
    db.close();
  });

  console.log("done");
});
