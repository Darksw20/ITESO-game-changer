const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express2" });
});

router.get("/home", function (req, res, next) {
  res.render("main", { body: "Express3" });
});

router.get("/healthcheck", function (req, res, next) {
  res.send("Created for the DASW O2022");
});

module.exports = router;
