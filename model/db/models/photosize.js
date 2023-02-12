'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PhotoSize.init({
    name: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PhotoSize',
  });
  return PhotoSize;
};