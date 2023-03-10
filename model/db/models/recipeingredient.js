'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecipeIngredient.belongsTo(models.Recipe)
      RecipeIngredient.belongsTo(models.ingredient)
    }
  }
  RecipeIngredient.init({
    recipeId: {
      type: DataTypes.INTEGER,
      references: { model: 'Recipe'}
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      references: { model: 'Ingredient' }
    },
    mesurement: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'RecipeIngredient',
  });
  return RecipeIngredient;
};