const { raw } = require("body-parser");
var express = require("express");
var jwt = require("jsonwebtoken")
var router = express.Router();
var db = require("../models")
var auth = require("../controllers/auth")

router.get("/token", auth.generateToken)

router.post("/login", auth.login)

router.post("/register", auth.register)

module.exports = router;