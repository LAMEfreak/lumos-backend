"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoundInvestor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.round);
      this.belongsTo(models.investor);
    }
  }
  RoundInvestor.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      roundId: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: "rounds" },
          key: "id",
        },
      },
      investorId: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: "investors" },
          key: "id",
        },
      },
      raised: DataTypes.INTEGER,
      committed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RoundInvestor",
      underscored: true,
    }
  );
  return RoundInvestor;
};
