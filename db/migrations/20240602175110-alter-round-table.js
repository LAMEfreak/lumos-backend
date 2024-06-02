"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("rounds", "name", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("rounds", "description", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("rounds", "name");
    await queryInterface.removeColumn("rounds", "description");
  },
};
