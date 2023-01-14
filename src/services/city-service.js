const CityRepository = require("../repository/city-repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      // communicating with repository layer
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      //console.log(cityId + "service");
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCities() {
    try {
      //console.log(cityId + "service");
      const city = await this.cityRepository.getAllCities();
      return city;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = CityService;
