"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rounds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stage: {
        type: Sequelize.STRING,
      },
      target: {
        type: Sequelize.INTEGER,
      },
      startup_id: {
        type: Sequelize.INTEGER,
        // define the foreign key in schema
        references: {
          model: { tableName: "startups" },
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rounds");
  },
};
