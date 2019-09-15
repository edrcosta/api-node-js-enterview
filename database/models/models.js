'use strict';
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.define('models', {
    name: DataTypes.STRING
  }, {});
  models.associate = function(models) {
    // associations can be defined here
  };
  return models;
};