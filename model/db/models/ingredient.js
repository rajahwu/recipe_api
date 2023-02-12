'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ingredient.belongsTo(models.Food)
      Ingredient.hasOne(models.NutritonFact, { foreignKey: 'ingredientId' })
      Ingredient.hasMany(models.RecipeIngredient, { foreignKey: 'ingredientId'})
      Ingredient.belongsToMany(models.Recipe, {
        through: 'RecipeIngredient',
        foreignKey: 'IngredientId',
        otherKey: 'RecipeId'
      })
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    foodId: {
      type: DataTypes.INTEGER,
      references: { model: Food }
    }
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};