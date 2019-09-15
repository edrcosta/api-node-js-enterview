'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        value: {
            type : Sequelize.STRING,
            allowNull : false,
            trim: true,
            validate: {
                notNull: { msg: "value field is required" },
            }
        },
        year_model: {
            type: Sequelize.INTEGER,
            allowNull : false,
            trim: true,
            validate: {
                notNull: { msg: "year_model field is required" },
            }
        },
        fuel: {
            type: Sequelize.STRING,
            allowNull : false,
            trim: true,
            validate: {
                notNull: { msg: "fuel field is required" },
            }
        },
        brand_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'brands',
                key: 'id'
            }
        },
        model_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'models',
                key: 'id'
            }
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicles');
  }
};