var express = require('express');
var router = express.Router();


const apiAdapter = require('./apiAdapter')
const BASE_URL = 'https://ubademy-users-api.herokuapp.com/' //TODO: Definir url en env var
const api = apiAdapter(BASE_URL)

router.get('/', function(req, res, next) {
  res.json({
    name: "user/",
    version: "v1",
  });
});

router.post('/login', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.get('/login/admin', function(req, res, next) {
  res.json({
    name: "user/login/admin"
  });
});

router.get('/register', function(req, res, next) {
  res.json({
    name: "user/register"
  });
});

router.get('/register/admin', function(req, res, next) {
  res.json({
    name: "user/register/admin"
  });
});

module.exports = router;
