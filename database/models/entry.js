'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Category, {as: "categories"} )
      
    }
  };
  Entry.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Entry',
    paranoid: true,
    timestamps: false,
  });
  return Entry;
};