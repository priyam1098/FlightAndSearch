const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      //console.log(flight);
      return flight;
    } catch (error) {
      console.log("Something went wrong on repository layer");
      throw { error };
    }
  }
  async deleteFlight() {
    try {
    } catch (error) {}
  }
  async updateFlight() {
    try {
    } catch (error) {}
  }
  async getFlight() {
    try {
    } catch (error) {}
  }
}

module.exports = FlightRepository;
