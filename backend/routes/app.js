/* CLEAN CODES*/
const express = require("express");
const router = express.Router();

//route for index, removed /app and changed to just /
router.get("/", (req, res, next) => {
  res.render("index");
});

//route for registration
router.get("/registration", (req, res, next) => {
  res.render("register"); //filename
});

router.get("/login", (req, res, next) => {
  const { name, age, gender } = req.query;
  res.render("login", {
    data: [name, age, gender], //kunin and then pasa s login page
  });
});

module.exports = router;
