"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rounds", [
      {
        stage: "Seed",
        target: 500000,
        name: "Test",
        description: "Test round to head home",
        startup_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Series A",
        target: 200000,
        name: "Test0",
        description: "Zero and one are the same thing",
        startup_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Pre-Seed",
        target: 100000,
        startup_id: 2,
        name: "Test2",
        description: "Test round to head home to the moon",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Series A",
        target: 2000000,
        startup_id: 3,
        name: "Test",
        description: "Peter Piper packed a pack of pickled peppers",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rounds", null, {});
  },
};