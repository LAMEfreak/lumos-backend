"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("round_investors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      round_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "rounds" },
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
      raised: {
        type: Sequelize.INTEGER,
      },
      committed: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("round_investors");
  },
};
