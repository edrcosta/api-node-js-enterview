import * as express from 'express';
import { ModelsBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IModel } from '../interfaces';

export class Models{

    static crud = () => new ModelsBO();

    public async list(req : IGetRequest, res : express.Response){
        res.send( await Models.crud().list(req.body.page));
    }
    
    public async getOne(req : any, res : express.Response){
        res.send( await Models.crud().getOne(req.params.id));
    }

    public async create(req : ICreateRequest<IModel>, res : express.Response){

        let err = await Models.crud().validate(req.body);
        
        if(err) return res.send(err);
        
        return res.send( await Models.crud().create(req.body));
    }

    public async update(req : IUpdateRequest<IModel>, res : express.Response){
        
        let err = await Models.crud().validate(req.body);

        if(err) return res.send(err);
        
        return res.send({
            updatedId : await Models.crud().update(req.params.id, req.body) ? req.params.id : false
        });
    }

    public async remove(req : IRemoveRequest, res : express.Response){
        
        const status = await Models.crud().remove(req.params.id);
        
        res.send({ removed : status === 1 });
    }
}