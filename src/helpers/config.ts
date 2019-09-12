import * as fs from 'fs';

export class Config{
 
    /**
     * Get config file and reply with error if this dont exists
     * simplify if need get config from some database 
     */
    static get(){
        
        const file = `${__dirname.replace('src/helpers', '')}config.json`;

        if(!fs.existsSync(file)) throw `Config file is missing please create`;
        
        return require(file);
    }
}