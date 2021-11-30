const express = require('express');
const router = express.Router();
const api = require('./apiAdapter')
const middleware = require("./middleware");
const BASE_URL = 'https://ubademy-courses-api.herokuapp.com' //TODO: Definir url en env var

const pass_to_courses_api = (req, res, base = "") => {
  api.run_axios(req, res, BASE_URL + base);
}

router.get('/', middleware.validUser, function (req, res, next) {
  pass_to_courses_api(req, res, "/courses");
});

router.post('/', middleware.validUser, function (req, res) {
  pass_to_courses_api(req, res, "/courses");
});

router.get('/types', middleware.validUser, function (req, res, next) {
  pass_to_courses_api(req, res, "/courses");
});

router.get('/:id', middleware.validUser, middleware.validUser, function (req, res, next) {
  pass_to_courses_api(req, res, "/courses");
});

router.put('/:id', middleware.validUser, function (req, res, next) {
  pass_to_courses_api(req, res, "/courses");
});

router.post('/:id/:role/:user_id', middleware.validUser, function (req, res, next) {
  pass_to_courses_api(req, res, "/courses");
});

router.delete('/:id/students/:user_id', middleware.validUser, function (req, res, next) {
  pass_to_courses_api(req, res, "/courses");
});

router.get('/subscriptions', middleware.validUser, function (req, res) {
  pass_to_courses_api(req, res, "/courses");
});

router.get('/:course_id', middleware.validUser, function (req, res) {
  pass_to_courses_api(req, res, "/courses");
});


module.exports = {
  router,
  BASE_URL,
  api
};