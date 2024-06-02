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
      // when deleting a round, delete associated records in round_investor junction table
      this.belongsToMany(models.investor, {
        through: "round_investors",
        onDelete: "CASCADE",
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
