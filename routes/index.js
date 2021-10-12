const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    name: "Ubademy api",
    version: "v1",
  });
});

module.exports = router;
