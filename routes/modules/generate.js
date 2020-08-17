const express = require("express");
const router = express.Router();
const Url = require("../../models/url");
// 定義首頁路由
router.get("/:url", (req, res) => {
  const url = req.params.url;
  console.log(url);
  Url.find()
    .lean()
    .then((item) => {
      const isExisted = item.some((x) => x.shortNumber === url);
      if (isExisted) {
        const shortNumber = item.find((x) => x.shortNumber === url);
        res.render("generate", { shortNumber });
      } else {
        const shortNumber = item.find((x) => x.shortNumber === url);
        res.render("generate", { shortNumber });
      }
    })
    .catch((error) => console.error(error));
});
// 匯出路由模組
module.exports = router;
