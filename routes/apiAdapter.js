const axios = require('axios');
const logger = require("../services/log/logService");
const StatusCodes = require("http-status-codes").StatusCodes

const create_headers = (req_headers) => {
  let header = {}
  const headers = [
    "content-type",
    "user-agent",
    "accept-encoding",
    "connection",
    "authorization"
  ];

  for (const h of headers) {
    if (req_headers[h] !== undefined) {
      header[h] = req_headers[h]
    }
  }
  return header
};


module.exports.run_axios = (req, res, url) => {
  let config = {
    baseURL: url + req.url,
    method: req.method,
    headers: create_headers(req.headers)
  }
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    config.data = {...req.body}
  }

  axios(config).then(resp => {
    res.status(resp.status).send(resp.data)
  }).catch(error => {
    logger.log(error)

    if (error.response !== undefined) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  })
};

