var express = require('express');
var router = express.Router()
var userService = require('./user')

router.use((req, res, next) => {
  console.log("Called: ", req.path)
  next()
})

router.use("/user", userService)

module.exports = router