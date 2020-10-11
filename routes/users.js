var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/message", function (req, res, next) {
  res.render("landing/message", { title: "Kotak Pesan | ANORA" });
});

router.get("/profile", function (req, res, next) {
  res.render("landing/profile", { title: "Profil | ANORA" });
});

router.get("/notification", function (req, res, next) {
  res.render("landing/notification", { title: "Notifikasi | ANORA" });
});

module.exports = router;
