import { Sequelize } from 'sequelize';
import { Config } from '../helpers';
import { IConfig } from '../interfaces';

import { modelSchema, brandsSchema, vehicleSchema } from './models';

export class Database {
    
    public config : IConfig;
    private connection : Sequelize;
    public tables : any;

    constructor(){

        this.config = Config.get();

        this.connection = new Sequelize(this.config.database, {});

        this.tables = {
            models : this.connection.define('models', modelSchema ),
            brands : this.connection.define('brands', brandsSchema),
            vehicles : this.connection.define('vehicles', vehicleSchema),
        }
    }
}