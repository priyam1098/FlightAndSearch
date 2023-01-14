const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  // Basic CRUD operation repository
  async createCity(data) {
    try {
      if (data.constructor === Array) {
        // Will create rows in bulk
        const city = await City.bulkCreate(data, { returning: true });
        return city;
      }
      //if only single entry(name:....) Will create single rows
      const city = await City.create({ name: data.name });
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
      //console.log(cityId);
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      //console.log(cityId);
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const city = await City.findAll();
      return city;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = CityRepository;
