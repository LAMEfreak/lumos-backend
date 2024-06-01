"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("person_personalities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      startup_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "startups" },
          key: "id",
        },
      },
      investor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "investors" },
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
    await queryInterface.dropTable("person_personalities");
  },
};
