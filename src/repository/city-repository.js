const { City } = require("../models/index");
class CityRepository {
  // Basic CRUD operation repository
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  // first which data you want to update
  async updateCity(cityId, data) {
    // data is object {name: "Delhi"}
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      console.log(cityId);
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = CityRepository;
