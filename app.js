require('dotenv/config')

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var flash = require("connect-flash")
const session = require('express-session');
var logger = require("morgan");
var jwt = require("jsonwebtoken")

var models = require("./models");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var cobaRouter = require("./routes/coba");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(session({
  secret: 'geeksforgeeks',
  saveUninitialized: true,
  resave: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/auth", authRouter);
app.use("/coba", cobaRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.locals.messages = req.flash();
  next(createError(404));
});

// Sequelize sync database
models.sequelize.authenticate().then(function () {
  console.log('Nice! Database looks fine')
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
