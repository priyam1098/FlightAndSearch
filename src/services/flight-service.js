const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      //arrivaltime should greater than departuretime
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Departure time should be less than arriavl time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data, //Spread Syntax will destructure object and add total seats in flight
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("Something went wrong on controller");
      throw { error };
    }
  }
}
module.exports = FlightService;
