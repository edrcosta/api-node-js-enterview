import { Database } from '../data';
import { Config } from '../helpers';

export class ModelsBO{

    static get(page : number){

        let db = new Database();

        const perPage = Config.get().endpoint.perPage;
        const offset = perPage * page - perPage;

        return db.tables.models.findAll({ offset: offset, limit: perPage, 
            attributes: ['id', 'name'], raw: true
        });
    }

}