const express = require("express");
const router = express.Router();

/* Public pages */
//------------------------------------------------------
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express2" });
});

router.get("/healthcheck", function (req, res, next) {
  res.send("Created for the DASW O2022");
});

/* Express indexed pages */
//------------------------------------------------------

router.get("/home", function (req, res, next) {
  res.render("login", {
    layout: "home",
    title: "Home Page",
    template: "home-template",
  });
});

router.get("/login", function (req, res, next) {
  res.render("login", {
    layout: "reglogin",
    title: "Login Page",
    template: "login-template",
  });
});

router.get("/register", function (req, res, next) {
  res.render("login", {
    layout: "reglogin",
    title: "Register Page",
    template: "register-template",
  });
});

router.get("/search", function (req, res, next) {
  res.render("dashboard", {
    layout: "search",
    title: "Search Event",
    template: "search-template",
  });
});

router.get("/profile", function (req, res, next) {
  res.render("dashboard", {
    layout: "profile",
    title: "Profile",
    template: "profile-template",
  });
});

router.get("/events", function (req, res, next) {
  res.render("dashboard", {
    layout: "events",
    title: "Select Events",
    template: "events-template",
  });
});

router.get("/control", function (req, res, next) {
  res.render("dashboard", {
    layout: "control",
    title: "Control Events",
    template: "control-template",
  });
});

router.get("/analytics", function (req, res, next) {
  res.render("dashboard", {
    layout: "analytics",
    title: "Analitycs",
    template: "analytics-template",
  });
});
module.exports = router;
