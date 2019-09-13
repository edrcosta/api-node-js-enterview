import { Sequelize } from 'sequelize';
import { Config } from '../helpers';
import { modelSchema, brandsSchema, vehicleSchema } from './models';

export class Database{

    private connection : Sequelize;
    public tables : any;
    public config : any;

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