"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable(
      "person_personalities",
      "startup_investors"
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable(
      "startup_investors",
      "person_personalities"
    );
  },
};
