const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    //POST request
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Succesfully created city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create city",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    //DELETE request /city/:id
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully deleted the city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

//GET request
const get = async (req, res) => {
  try {
    //console.log(req.params.id);
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully fetch the city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the city",
      err: error,
    });
  }
};

//Patch request
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    console.log(req.params.id);
    //console.log(req.body.city);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully update the city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Succesfully get all the city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
