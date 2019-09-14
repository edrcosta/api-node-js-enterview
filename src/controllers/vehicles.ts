import * as express from 'express';
import { VehiclesBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IModel } from '../interfaces';

export class Vehicles{

    static crud = () => new VehiclesBO();

    public async list(req : IGetRequest, res : express.Response){
        res.send( await Vehicles.crud().list(req.body.page));
    }
    
    public async getOne(req : any, res : express.Response){
        res.send( await Vehicles.crud().getOne(req.params.id));
    }

    public async create(req : ICreateRequest<IModel>, res : express.Response){

        let err = await Vehicles.crud().validate(req.body);
        
        if(err) return res.send(err);
        
        return res.send( await Vehicles.crud().create(req.body));
    }

    public async update(req : IUpdateRequest<IModel>, res : express.Response){
        
        let err = await Vehicles.crud().validate(req.body);

        if(err) return res.send(err);
        
        return res.send({
            updatedId : await Vehicles.crud().update(req.params.id, req.body) ? req.params.id : false
        });
    }

    public async remove(req : IRemoveRequest, res : express.Response){
        
        const status = await Vehicles.crud().remove(req.params.id);
        
        res.send({ removed : status === 1 });
    }
}