const { City } = require("../models/index");
class CityRepository {
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
    } catch (error) {
      throw { error };
    }
  }

  //   async updateCity({ name, cityId }) {
  //     try {
  //       const city = await City;
  //     } catch (error) {
  //       throw { error };
  //     }
  //   }
}
module.exports = CityRepository;
