"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("investors", [
      {
        name: "John Smith",
        type: "VC",
        company: "ABC Ventures",
        stage: "Seed",
        email: "abcventures@live.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Harry Truman",
        type: "VC",
        company: "DEF Ventures",
        stage: "Series A",
        email: "defventures@live.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mary Coleman",
        type: "Angel",
        company: null,
        stage: "Seed",
        email: "abcventures@live.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("investors", null, {});
  },
};
