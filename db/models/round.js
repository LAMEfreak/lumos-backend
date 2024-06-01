'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  round.init({
    stage: DataTypes.STRING,
    target: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'round',
    underscored: true,
  });
  return Round;
};