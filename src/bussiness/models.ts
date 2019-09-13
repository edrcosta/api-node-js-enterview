import { Database } from '../data';
import { Config } from '../helpers';
import { IModel } from '../interfaces';

export class ModelsBO{

    static get(page : number){

        let db = new Database();

        const perPage = Config.get().endpoint.perPage;
        const offset = perPage * page - perPage;

        return db.tables.models.findAll({ offset: offset, limit: perPage, 
            attributes: ['id', 'name'], raw: true
        });
    }

    static getOne(id : number){

        let db = new Database();

        return db.tables.models.findAll({   
            where: {id: id}, 
            attributes: ['id', 'name'], 
            raw: true
        });
    }

    static validate(data : IModel){
        return new Promise((resolve : any) => {

            let db = new Database();
        
            db.tables.models.build(data)
                .validate()
                .then(() => {
                    resolve(false);
                })
                .catch((err) => { 
                    resolve(err.errors.map((e) => e.message));
                });
        });
    }

    static create(data : IModel){ 
        
        let db = new Database();
        
        return db.tables.models.create(data);
    }

    static update(id : number, data : any){

        let db = new Database();

        return db.tables.models.update( data, { where: { id: id } });
    }

    static remove(id : number){
        let db = new Database();

        return db.tables.models.destroy({ where: { id: id } });
    }
}