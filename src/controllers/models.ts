import * as express from 'express';
import { ModelsBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IModel } from '../interfaces';

export class Models{

    async get(req : IGetRequest, res : express.Response){
        res.send(await ModelsBO.get(req.body.page ? req.body.page : 1));
    }
    
    async getOne(req : any, res : express.Response){
        res.send(await ModelsBO.getOne(req.params.id));
    }

    async create(req : ICreateRequest<IModel>, res : express.Response){
        
        let errors = await ModelsBO.validate(req.body);
        
        if(errors) return res.send(errors);
        
        return res.send(await ModelsBO.create(req.body));
    }

    async update(req : IUpdateRequest<IModel>, res : express.Response){
                
        let errors = await ModelsBO.validate(req.body);
        
        if(errors) return res.send(errors);

        let status = await ModelsBO.update(req.params.id, req.body);

        if(status[0] === 1)
            return res.send({ updated : req.params.id })
        return res.send({ updated : false });
    }

    async remove(req : IRemoveRequest, res : express.Response){
        if(await ModelsBO.remove(req.params.id) === 1)
            return res.send({ removed : req.params.id })
        return res.send({ removed : false });
    }
}