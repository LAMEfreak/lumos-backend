"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("round_investors", "raised");
    await queryInterface.addColumn("round_investors", "raised", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("round_investors", "raised");
    await queryInterface.addColumn("round_investors", "raised", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
