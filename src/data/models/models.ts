import { INTEGER, STRING } from 'sequelize';

export const modelSchema = {
	id: {
		type: INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type : STRING,
		allowNull : false,
		trim: true,
		validate: {
			notNull: { msg: "name field is required" },
		}
	}
};