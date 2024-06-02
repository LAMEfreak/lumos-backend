"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.round, {
        onDelete: "CASCADE",
      });
      this.belongsToMany(models.investor, {
        through: "startup_investors",
        onDelete: "CASCADE",
      });
    }
  }
  Startup.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      auth0Id: DataTypes.STRING,
      industry: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "startup",
      underscored: true,
    }
  );
  return Startup;
};
