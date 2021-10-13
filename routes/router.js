var express = require('express');
var router = express.Router()
var userService = require('./user')

router.use((req, res, next) => {
  next()
})

router.use("/user", userService)

module.exports = router