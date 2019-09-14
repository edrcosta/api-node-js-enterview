import { INTEGER, NUMBER, STRING } from 'sequelize';

export const vehicleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
    },
    value: {
        type: STRING
    },
    yearModel: {
        type: NUMBER
    },
    fuel: {
        type: STRING
    },
    brand: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'brands',
            key: 'id'
        }
    },
    model: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'models',
            key: 'id'
        }
    },
};