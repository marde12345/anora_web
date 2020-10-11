var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("landing/home", { title: "ANORA | Your Data Solution" });
});

router.get("/login", function (req, res, next) {
  res.render("landing/login", { title: "Login | ANORA" });
});

router.get("/register", function (req, res, next) {
  res.render("landing/register", { title: "Pendaftaran Baru | ANORA" });
});

router.get("/forgot", function (req, res, next) {
  res.render("landing/forgot", { title: "Lupa Kata Sandi | ANORA" });
});

router.get("/browse", function (req, res, next) {
  res.render("landing/browse", { title: "Telusuri Statistisi | ANORA" });
});

router.get("/about", function (req, res, next) {
  res.render("landing/about", { title: "Tentang Kami | ANORA" });
});

router.get("/statistisi", function (req, res, next) {
  res.render("landing/statistisi-portofolio", {
    title: "Portofolio Statistisi | ANORA"
  });
});

module.exports = router;
