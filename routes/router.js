var express = require('express');
var router = express.Router()
var userService = require('./user')
var coursesService = require('./courses')
var subscriptionsService = require('./subscriptions')

router.use((req, res, next) => {
  next()
})

router.use("/users", userService.router)
router.use("/courses", coursesService.router)
router.use("/subscriptions", subscriptionsService.router)

module.exports = router