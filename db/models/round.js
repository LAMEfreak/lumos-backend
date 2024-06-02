"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.startup);
      this.belongsToMany(models.investor, {
        through: "round_investors",
      });
      this.hasMany(models.roundinvestor);
    }
  }
  Round.init(
    {
      stage: DataTypes.STRING,
      target: DataTypes.NUMBER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "round",
      underscored: true,
    }
  );
  return Round;
};
