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
      interest: DataTypes.INTEGER,
      commitment_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "roundinvestor",
      underscored: true,
    }
  );
  return RoundInvestor;
};
