"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rounds", [
      {
        stage: "Seed",
        target: 500000,
        startup_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Pre-Seed",
        target: 100000,
        startup_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Series A",
        target: 2000000,
        startup_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rounds", null, {});
  },
};