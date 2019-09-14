/**
 * This is a generic crud class.. 
 * 
 * most part of simple crud operations are very standard
 * this class is a generalization of standard crud operations
 * any bussiness logic can be put on a bussiness class
 */
import { Database } from '../data';
import { Config } from '../helpers';
import { IModel } from '../interfaces';

export class Crud {

    private table : string;
    private db : Database;

    constructor(table : string){
        this.table = table;
        this.db = new Database();
    }

    list(page? : number){

        page = page ? page : 1;

        const perPage = Config.get().endpoint.perPage;
        const offset = perPage * page - perPage;

        return this.db.tables[this.table].findAll({ offset: offset, limit: perPage, 
            attributes: ['id', 'name'], raw: true
        });
    }

    getOne(id : number){
        return this.db.tables[this.table].findAll({   
            where: {id: id}, 
            attributes: ['id', 'name'], 
            raw: true
        });
    }

    validate(data : IModel){
        return new Promise((resolve : any) => {

            this.db.tables[this.table].build(data)
                .validate()
                .then(() => {
                    resolve(false);
                })
                .catch((err) => { 
                    resolve(err.errors.map((e) => e.message));
                });
        });
    }

    create(data : IModel){        
        return this.db.tables[this.table].create(data);
    }

    update(id : number, data : any){
        return this.db.tables[this.table].update( data, { where: { id: id } });
    }

    remove(id : number){
        return this.db.tables[this.table].destroy({ where: { id: id } });
    }
}