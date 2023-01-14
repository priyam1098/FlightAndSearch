"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{    //Airports migration
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Kempegowda",
          cityId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mangalore",
          cityId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hubballi",
          cityId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belgaum",
          cityId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
