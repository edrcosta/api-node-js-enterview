'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('models', [
      { name : 'CD2.0 16V/S CD2.0 16V TDI 4x2 Die' },
      { name : 'CD2.0 16V/S' },
      { name : '2.0 eletric' },
      { name : 'TDI 4x2 Die' },
      { name : '16V/S CD2.0 16V ' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('models', null, {});
  }
};