const express = require("express");
const CityController = require("../../controllers/city-controller.js");
const router = express.Router();
//const router = require("../index");

router.post("/city", CityController.create);
module.exports = router;
