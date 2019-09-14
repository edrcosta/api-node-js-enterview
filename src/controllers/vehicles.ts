import * as express from 'express';
import { VehiclesBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IVehicle } from '../interfaces';

export class Vehicles{

    static crud = () => new VehiclesBO();
    
    static format = (row : IVehicle) => {
        return {
            id : row.id,
            value : row.value,
            year_model : row.year_model,
            fuel : row.fuel,
            model : row["model.name"],
            brand : row["brand.name"],
        }
    }

    public async list(req : IGetRequest, res : express.Response){
        
        let data = await Vehicles.crud().list(req.body.page).map(Vehicles.format)
        
        res.send( data);
    }
    
    public async getOne(req : any, res : express.Response){
        let row = (await Vehicles.crud().getOne(req.params.id));

        res.send(Vehicles.format(row));
    }

    public async create(req : ICreateRequest<IVehicle>, res : express.Response){

        let data = req.body;

        data.model_id = data.model;
        data.brand_id = data.brand;

        delete data.model;
        delete data.brand;

        let err = await Vehicles.crud().validate(data);
        
        if(err) return res.send(err);
        
        let result = await Vehicles.crud().create(data);

        data.id = result.id;

        return res.send(data);
    }

    public async update(req : IUpdateRequest<IVehicle>, res : express.Response){
        
        let data = req.body;

        data.model_id = data.model;
        data.brand_id = data.brand;

        delete data.model;
        delete data.brand;

        let err = await Vehicles.crud().validate(data);

        if(err) return res.send(err);
        
        return res.send({
            updatedId : await Vehicles.crud().update(req.params.id, data) ? req.params.id : false
        });
    }

    public async remove(req : IRemoveRequest, res : express.Response){
        
        const status = await Vehicles.crud().remove(req.params.id);
        
        res.send({ removed : status === 1 });
    }
}