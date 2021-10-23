const express = require('express');
const logger = require('../services/log/logService')
const router = express.Router();
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'https://ubademy-users-api.herokuapp.com/' //TODO: Definir url en env var
const api = apiAdapter(BASE_URL)

get_http_verb = (req) => {
  if (req.method === "POST")
    return api.post
  if (req.method === "GET")
    return api.get
  if (req.method === "PATCH")
    return api.patch
  if (req.method === "DELETE")
    return api.delete
}

pass_to_user_api = (req, res, base = "") => {
  const api_method = get_http_verb(req)
  api_method(base + req.path, req.body).then(resp => {
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
    name: "users/",
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

router.patch('/:id', function(req, res, next) {
  pass_to_user_api(req, res, "users");
});

router.post('/:id/block', function(req, res, next) {
  pass_to_user_api(req, res, "users");
});

router.delete('/:id/block', function(req, res, next) {
  pass_to_user_api(req, res, "users");
});

module.exports = router;
