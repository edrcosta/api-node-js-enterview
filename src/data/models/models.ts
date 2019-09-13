import { INTEGER, STRING } from 'sequelize';

export const modelSchema = {
	id: {
		type: INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: STRING
};