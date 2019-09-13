import { INTEGER, STRING } from 'sequelize';

export const brandsSchema = {
	id: {
		type: INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: STRING
};