const express = require('express');
const logger = require('../services/log/logService')
const router = express.Router();
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'https://ubademy-users-api.herokuapp.com/' //TODO: Definir url en env var
const api = apiAdapter(BASE_URL)

pass_to_user_api = (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  }).catch(error => {
    logger.log(error.response)
    res.json({
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data
    })
  })
}

router.get('/', function(req, res, next) {
  res.json({
    name: "user/",
    version: "v1",
  });
});


router.post('/login', (req, res) => {
  pass_to_user_api(req, res);
})

router.post('/login/admin', function(req, res, next) {
  pass_to_user_api(req, res);
});

router.post('/register', function(req, res, next) {
  pass_to_user_api(req, res);
});

router.post('/register/admin', function(req, res, next) {
  pass_to_user_api(req, res);
});

module.exports = router;
