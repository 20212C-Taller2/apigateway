const express = require('express');
const logger = require('../services/log/logService')
const router = express.Router();
const apiAdapter = require('./apiAdapter')
const BASE_URL = 'https://ubademy-courses-api.herokuapp.com' //TODO: Definir url en env var
const api = apiAdapter(BASE_URL)
const StatusCodes = require("http-status-codes").StatusCodes

get_http_verb = (req) => {
    if (req.method === "POST")
        return api.post
    if (req.method === "GET")
        return api.get
    if (req.method === "PATCH")
        return api.patch
    if (req.method === "DELETE")
        return api.delete
};

create_headers = (req_headers) => {
    let header = {
        "content-type": req_headers["content-type"],
        "cser-agent": "ubademy-apigateway/1",
        // "Host": req_headers["host"],
        "accept-encoding": req_headers["accept-encoding"],
        "connection": "keep-alive",
        //"Content-length": req_headers["content-length"],
    }

    if (req_headers["authorization"] !== undefined) {
        header["authorization"] = req_headers["authorization"]
    }
    return header
};


pass_to_courses_api = (req, res, base = "") => {
    const api_method = get_http_verb(req)
    const head = create_headers(req.headers)
    api_method(BASE_URL + base + req.path, req.body, {headers: head}).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(error => {
        logger.log(error)

        if (error.response !== undefined) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        }
    })
}

router.get('/', function (req, res, next) {
    pass_to_courses_api(req, res, "/courses");
});

router.post('/', (req, res) => {
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