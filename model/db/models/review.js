'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User)
      Review.belongsTo(models.Recipe)
    }
  }
  Review.init({
    post: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'User' }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Recipe' }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};