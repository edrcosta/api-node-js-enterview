'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [
      { name : 'Ford' },
      { name : 'Volkswagen' },
      { name : 'Toyota' },
      { name : 'Hyundai' },
      { name : 'Chevrolet' },
      { name : 'Honda' },
      { name : 'Kia' },
      { name : 'Mazda' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  }
};