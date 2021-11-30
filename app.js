var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

var router = require('./routes/router')
var app = express();

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.use(router)

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

console.log("Simple API Gateway")

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500).json({"message": err.message});
});

module.exports = app;