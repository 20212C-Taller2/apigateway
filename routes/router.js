var express = require('express');
var router = express.Router()
var userService = require('./user')
var coursesService = require('./courses')

router.use((req, res, next) => {
  next()
})

router.use("/users", userService.router)
router.use("/courses", coursesService.router)

module.exports = router