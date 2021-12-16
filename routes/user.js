const api = require("./apiAdapter");
const express = require('express');
const router = express.Router();
const BASE_URL = 'https://ubademy-users-api.herokuapp.com' //TODO: Definir url en env var

const pass_to_user_api = (req, res, base = "") => {
    api.run_axios(req, res, BASE_URL + base);
}

router.get('/', function (req, res, next) {
  pass_to_user_api(req, res, "/users");
});

router.post('/login', (req, res) => {
  pass_to_user_api(req, res);
})

router.post('/login/admin', function (req, res, next) {
  pass_to_user_api(req, res);
});

router.post('/login/google', (req, res) => {
  pass_to_user_api(req, res);
})

router.post('/register', function (req, res, next) {
  pass_to_user_api(req, res);
});

router.post('/register/admin', function (req, res, next) {
  pass_to_user_api(req, res);
});

router.patch('/:id', function (req, res, next) {
  pass_to_user_api(req, res, "/users");
});

router.get('/:id', function (req, res, next) {
  pass_to_user_api(req, res, "/users");
});

router.post('/:id/block', function (req, res, next) {
  pass_to_user_api(req, res, "/users");
});

router.delete('/:id/block', function (req, res, next) {
  pass_to_user_api(req, res, "/users");
});

module.exports = {
  router,
  BASE_URL,
  api
};
