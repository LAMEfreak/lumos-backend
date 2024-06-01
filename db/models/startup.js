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
      // define association here
    }
  }
  Startup.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      auth0Id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "startup",
      underscored: true,
    }
  );
  return Startup;
};
