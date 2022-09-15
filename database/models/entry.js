'use strict';
const { DATE } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  entry.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      unique:true
    },
    deletedAt : DataTypes.DATE,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return entry;
};