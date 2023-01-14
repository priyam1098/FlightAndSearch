const express = require("express");
const CityController = require("../../controllers/city-controller.js");
const router = express.Router();
//const router = require("../index");

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
module.exports = router;
