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
		unique: true,
		trim: true,
		validate: {
			notNull: { msg: "name field is required" },
			unique : { msg : "must be uniqueee"}
		}
	}
};