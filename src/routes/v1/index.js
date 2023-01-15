const express = require("express");
const { CityController, FlightController } = require("../../controllers/index");
//const FlightController = require("../../controllers/index");
const router = express.Router();
//const router = require("../index");

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

///  flights routes below

router.post("/flights", FlightController.create);

module.exports = router;
