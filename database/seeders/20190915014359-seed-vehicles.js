'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehicles', [
      {
        "value" : "111.00",
        "brand_id" : 1,
        "model_id" : 1,
        "year_model" : 1992,
        "fuel" : "Gasolina"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vehicles', null, {});
  }
};