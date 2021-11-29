const express = require('express');
const router = express.Router();
const api = require('./apiAdapter')
const BASE_URL = 'https://ubademy-courses-api.herokuapp.com' //TODO: Definir url en env var

const pass_to_courses_api = (req, res, base = "") => {
    api.run_axios(req, res, BASE_URL + base);
}

router.get('/', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.post('/', (req, res) => {
    pass_to_courses_api(req, res, "/courses");
});

router.get('/types', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.get('/:id', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.put('/:id', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.post('/:id/:role/:user_id', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.delete('/:id/students/:user_id', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.get('/subscriptions', (req, res) => {
    pass_to_courses_api(req, res, "/courses");
});

router.get('/:course_id', (req, res) => {
    pass_to_courses_api(req, res, "/courses");
});



module.exports = {
    router,
    BASE_URL,
    api};