var express = require('express');
var app = express();
var router = require('./routes/router')
var bodyParser = require('body-parser');
var logger = require("morgan");

app.use(logger("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Simple API Gateway")
})

app.use(router)

console.log("Simple API Gateway")

app.listen(3000); //TODO: env var para el puerto