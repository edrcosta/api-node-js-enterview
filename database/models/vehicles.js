'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicles = sequelize.define('vehicles', {
    name: DataTypes.STRING
  }, {});
  vehicles.associate = function(models) {
    // associations can be defined here
  };
  return vehicles;
};