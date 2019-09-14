import { INTEGER, NUMBER, STRING } from 'sequelize';

export const vehicleSchema = {
	id: {
		type: INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
    value: STRING,
    brand: STRING,
    model: STRING,
    yearModel: NUMBER,
    fuel: STRING,
};