import * as fs from 'fs';
import { IConfig } from '../interfaces';

export class Config{
    
    static config : IConfig = null;

    static get() : IConfig{
        
        if(!Config.config){   
            
            const file = `${__dirname.replace('src/helpers', '')}config.json`;
            const dbfile = `${__dirname.replace('src/helpers', '')}database/config/config.json`;

            if(!fs.existsSync(file)) throw `Config file is missing please create`;
            if(!fs.existsSync(dbfile)) throw `Config file is missing please create`;
            
            let config = require(file);
            const database = require(dbfile);
            
            const db = database[config.env];

            config.database = `${db.dialect}://${db.username}:${db.password}@${db.host}/${db.database}`;

            Config.config = config;
        }

        return Config.config;
    }
}