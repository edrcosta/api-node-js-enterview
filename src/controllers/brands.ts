import * as express from 'express';
import { BrandsBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IModel } from '../interfaces';

export class Brands{

    static crud = () => new BrandsBO();

    public async list(req : IGetRequest, res : express.Response){
        res.send( await Brands.crud().list(req.body.page));
    }
    
    public async getOne(req : any, res : express.Response){
        res.send( await Brands.crud().getOne(req.params.id));
    }

    public async create(req : ICreateRequest<IModel>, res : express.Response){

        let err = await Brands.crud().validate(req.body);
        
        if(err) return res.send(err);
        
        return res.send( await Brands.crud().create(req.body));
    }

    public async update(req : IUpdateRequest<IModel>, res : express.Response){
        
        let err = await Brands.crud().validate(req.body);

        if(err) return res.send(err);
        
        return res.send({
            updatedId : await Brands.crud().update(req.params.id, req.body) ? req.params.id : false
        });
    }

    public async remove(req : IRemoveRequest, res : express.Response){
        
        const status = await Brands.crud().remove(req.params.id);
        
        res.send({ removed : status === 1 });
    }
}