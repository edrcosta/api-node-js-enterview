import * as fs from 'fs';
import { IConfig } from '../interfaces';

export class Config{
    
    static config : IConfig = null;

    static get() : IConfig{
        
        if(!Config.config){   
            
            const file = `${__dirname.replace('src/helpers', '')}config.json`;

            if(!fs.existsSync(file)) throw `Config file is missing please create`;
            
            return require(file);
        }

        return Config.config;
    }
}