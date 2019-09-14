import { INTEGER, STRING } from 'sequelize';

export const brandsSchema = {
	id: {
		allowNull: false,
		type: INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: STRING
};