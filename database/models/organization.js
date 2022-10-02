'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate(models) {
      Organization.hasMany(models.Slide, {
        foreingKey: 'organizationId',
        as: "slides"
      })      
    }
  }
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    fbUrl: DataTypes.STRING,
    igUrl: DataTypes.STRING,
    ldUrl: DataTypes.STRING,
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