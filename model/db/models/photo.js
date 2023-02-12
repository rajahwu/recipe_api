'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.Recipe)
      Photo.belongsTo(models.PhotoSize)
    }
  }
  Photo.init({
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sizeId: {
      type: DataTypes.INTEGER,
      references:{model: 'PhotoSize'}
    },
    recipeId: {
      type: DataTypes.INTEGER,
      references: { model: 'Recipe' }
    }
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};