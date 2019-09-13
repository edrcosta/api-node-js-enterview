import * as fs from 'fs';

export class Config{
    
    static get(){
        
        const file = `${__dirname.replace('src/helpers', '')}config.json`;

        if(!fs.existsSync(file)) throw `Config file is missing please create`;
        
        return require(file);
    }
}