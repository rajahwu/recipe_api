'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.RecipeType)
      Recipe.hasMany(models.Like, { foreignKey: 'recipeId' })
      Recipe.hasMany(models.Review, { foreignKey: 'recipeId' })
      Recipe.hasMany(models.Photo, { foreignKey: 'recipeId' })
      Recipe.hasMany(models.RecipeIngredient, { foreignKey: 'recipeId' })
      Recipe.belongsToMany(models.Ingredient, {
        through: models.RecipeIngredient, 
        foreignKey: 'recipeId',
        otherKey: 'ingredientId'
      })
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    prepTime: DataTypes.FLOAT,
    cookTime: DataTypes.FLOAT,
    instructions: DataTypes.TEXT,
    recipeTypeId: {
      type: DataTypes.INTEGER,
      references: { model: ' RecipeType'}
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};