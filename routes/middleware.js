const axios = require('axios');
const logger = require("../services/log/logService");
const {StatusCodes} = require("http-status-codes");
const {BASE_URL} = require("./user");

exports.validUser = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({message: "There is no authorization headers"});
  }
  const token = req.headers.authorization;

  let config = {
    baseURL: BASE_URL + "/users/blocked",
    method: "GET",
    headers: {
      "authorization": token,
      "content-type": "application/json"
    }
  }

  axios(config).then(resp => {
    if(resp.status === StatusCodes.OK) {
      if(!resp.data.blocked){
        next()
      } else {
         res.status(StatusCodes.UNAUTHORIZED).json({message: "User is blocked"});
      }
    }
  }).catch(error => {
    logger.log(error)

    if (error.response !== undefined) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: error.message});
    }
  })
};