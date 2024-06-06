'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "round_investors",
      "round_investors_round_id_fkey"
    );
    await queryInterface.removeConstraint(
      "round_investors",
      "round_investors_investor_id_fkey"
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint("round_investors", {
      fields: ["round_id"],
      type: "foreign key",
      name: "round_investors_round_id_fkey",
      references: {
        table: "rounds",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("round_investors", {
      fields: ["investor_id"],
      type: "foreign key",
      name: "round_investors_investor_id_fkey",
      references: {
        table: "investors",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
