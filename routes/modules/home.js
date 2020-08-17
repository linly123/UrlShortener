//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();
var randomstring = require("randomstring");
const Url = require("../../models/url");
// 定義首頁路由

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/:url", (req, res) => {
  const url = req.params.url;
  console.log(url);

  if (url === undefined) return res.redirect("/");

  return Url.find()
    .lean()
    .then((item) => {
      const result = item.find((x) => x.shortNumber === url);

      if (result === undefined) return res.redirect("/");

      return res.redirect(result.url);
    })
    .catch((error) => {
      console.error(error);
      return res.redirect("/");
    });
});

router.post("/", (req, res) => {
  const url = req.body.url;
  console.log(url);
  // if (url === undefined || url === "") res.redirect("/");

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  console.log(validURL(url));

  if (validURL(url)) {
    Url.find()
      .lean()
      .then((item) => {
        const isExisted = item.some((x) => x.url === url);

        if (isExisted) {
          const shortNumber = item.find((x) => x.url === url).shortNumber;
          console.log(shortNumber);
          res.redirect(`/generate/${shortNumber}`);
        } else {
          let randomstringNumber = randomstring.generate(5);
          const shortNumber = randomstringNumber;
          Url.create({ url, shortNumber });
          res.redirect(`/generate/${shortNumber}`);
        }
      })
      .catch((error) => console.error(error));
  } else if (url === undefined || url === "") {
    const errorMessage = "The input is empty!!Please input the URL";
    res.render("index", { errorMessage });
  } else {
    const errorMessage = "Please input the vaild URL";
    res.render("index", { errorMessage });
  }
});

// 匯出路由模組
module.exports = router;
