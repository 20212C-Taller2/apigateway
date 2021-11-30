const express = require('express');
const router = express.Router();
const api = require('./apiAdapter')
const middleware = require("./middleware");
const BASE_URL = 'https://ubademy-subscriptions-api.herokuapp.com/' //TODO: Definir url en env var

const pass_to_subscriptions_api = (req, res, base = "") => {
  api.run_axios(req, res, BASE_URL + base);
}

router.get('/', middleware.validUser, function (req, res, next) {
  pass_to_subscriptions_api(req, res, "subscriptions");
});

module.exports = {
  router,
  BASE_URL,
  api
};