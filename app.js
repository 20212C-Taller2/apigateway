var express = require('express');
var app = express();
var router = require('./routes/router')
var bodyParser = require('body-parser');
var logger = require("morgan");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

app.use(logger("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Simple API Gateway")
})
app.use(router)

console.log("Simple API Gateway")

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.listen(port);
