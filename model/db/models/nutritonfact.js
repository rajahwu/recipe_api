'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NutritonFact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NutritonFact.init({
    calories: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    carbs: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    carbs: DataTypes.FLOAT,
    ingredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NutritonFact',
  });
  return NutritonFact;
};