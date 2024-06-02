"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Investor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.startup, {
        through: "startup_investors",
        onDelete: "CASCADE",
      });
      this.belongsToMany(models.round, {
        through: "round_investors",
      });
      this.hasMany(models.roundinvestor);
    }
  }
  Investor.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      company: DataTypes.STRING,
      stage: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "investor",
      underscored: true,
    }
  );
  return Investor;
};
