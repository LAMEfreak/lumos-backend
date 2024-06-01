"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("startups", [
      {
        name: "Gryffindor",
        email: "123@live.com",
        auth0_id: "123",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Syltherin",
        email: "456@live.com",
        auth0_id: "456",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Hufflepuff",
        email: "789@live.com",
        auth0_id: "789",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("startups", null, {});
  },
};
