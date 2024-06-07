"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn("round_investors", "raised", {
    //   type: Sequelize.STRING,
    // });
    await queryInterface.addColumn("round_investors", "raised_temp", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    // Step 2: Copy and convert the data from the old column to the new column
    await queryInterface.sequelize.query(`
      UPDATE round_investors 
      SET raised_temp = CAST(raised AS INTEGER)
    `);
    // Step 3: Remove the old column
    await queryInterface.removeColumn("round_investors", "raised");

    // Step 4: Rename the new column to the original column name
    await queryInterface.renameColumn(
      "round_investors",
      "raised_temp",
      "raised"
    );
  },

  async down(queryInterface, Sequelize) {
    // Step 1: Add a new temporary column
    await queryInterface.addColumn("round_investors", "raised_temp", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Step 2: Copy the data from the old column to the new column
    await queryInterface.sequelize.query(`
  UPDATE round_investors 
  SET raised_temp = CAST(raised AS TEXT)
`);

    // Step 3: Remove the old column
    await queryInterface.removeColumn("round_investors", "raised");

    // Step 4: Rename the new column to the original column name
    await queryInterface.renameColumn(
      "round_investors",
      "raised_temp",
      "raised"
    );


  },
};
