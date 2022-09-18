'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate(models) {
      Organization.hasMany(models.Slide, {
        foreingKey: 'slideId',
        as: "slides"
      })      
    }
  }
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    welcomeText: DataTypes.TEXT,
    aboutUsText: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Organization',
    paranoid: true,
    timestamps: true,
  });
  return Organization;
};