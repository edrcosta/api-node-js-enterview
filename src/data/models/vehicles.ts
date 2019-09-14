import { INTEGER, NUMBER, STRING } from 'sequelize';

export const vehicleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
    },
    value: {
        type : STRING,
		allowNull : false,
		trim: true,
		validate: {
			notNull: { msg: "value field is required" },
		}
    },
    year_model: {
        type: NUMBER,
		allowNull : false,
		trim: true,
		validate: {
			notNull: { msg: "year_model field is required" },
		}
    },
    fuel: {
        type: STRING,
        allowNull : false,
		trim: true,
		validate: {
			notNull: { msg: "fuel field is required" },
		}
    },
    brand_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'brands',
            key: 'id'
        }
    },
    model_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'models',
            key: 'id'
        }
    },
};