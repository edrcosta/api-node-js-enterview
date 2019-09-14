import { Database } from '../data';
import { IVehicle } from '../interfaces';
import { Config } from '../helpers';

export class VehiclesBO {

    private fields = [ "id", "value", "brand", "model", "year_model", "fuel"];

    validateUpdate = (data) => {
        let errors = [];
        Object.keys(data).forEach((field : string) => {
            if(this.fields.indexOf(field) === -1){
                errors.push(`field ${field} is not allowed in vehicle`);
            }
        });
        return errors;
    }

    validate(data : any){
        return new Promise((resolve : any) => {
            let db = new Database();

           db.tables.vehicles.build(data)
                .validate()
                .then(() => {
                    resolve(false);
                })
                .catch((err) => { 
                    resolve(err.errors.map((e) => e.message));
                });
        });
    }

    create(data : IVehicle){

        let db = new Database();

        return db.tables.vehicles.create(data);
    }

    list(page? : number){

        let db = new Database();

        page = page ? page : 1;

        const perPage = Config.get().endpoint.perPage;
        const offset = perPage * page - perPage;

        return db.tables.vehicles.findAll({ 
            offset: offset, 
            limit: perPage, 
            attributes: [ "id", "value", "year_model", "fuel"],
            raw: true,
            include : [
                { model : db.tables.models },
                { model : db.tables.brands }
            ]
        });
    }

    update(id : number, data : any){

        let db = new Database();

        return db.tables.vehicles.update( data, { where: { id: id } });
    }

    getOne(id : number){

        let db = new Database();

        return db.tables.vehicles.findOne({ 
            where : { id : id},
            limit: 1, 
            attributes: [ "id", "value", "year_model", "fuel"],
            raw: true,
            include : [
                { model : db.tables.models },
                { model : db.tables.brands }
            ]
        });
    }
    
    remove(id : number){
        let db = new Database();

        return db.tables.vehicles.destroy({ where: { id: id } });
    }
}