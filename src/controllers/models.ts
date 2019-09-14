import * as express from 'express';
import { ModelsBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IModel } from '../interfaces';

export class Models{

    static crud = () => new ModelsBO();

    public async list(req : IGetRequest, res : express.Response){
        res.send( await Models.crud().list(req.body.page));
    }
    
    public async getOne(req : any, res : express.Response){
        let row = (await Models.crud().getOne(req.params.id))[0];

        res.send(row ? row : { error : `Not found id: ${req.params.id}`});
    }

    public async create(req : ICreateRequest<IModel>, res : express.Response){

        let err = await Models.crud().validate(req.body);
        
        if(err) return res.send(err);
        
        let isUnique = (await Models.crud().checkExistsByName({ name : req.body.name})) === 0;

        if(!isUnique) return res.send({
            error : 'this model name aready exists'
        });

        return res.send( await Models.crud().create(req.body));
    }

    public async update(req : IUpdateRequest<IModel>, res : express.Response){
        
        let err = await Models.crud().validate(req.body);

        if(err) return res.send(err);
        
        let isUnique = (await Models.crud().checkExistsByName({ name : req.body.name})) === 0;

        if(!isUnique) return res.send({
            error : 'this model name aready exists'
        });

        let result = (await Models.crud().update(req.params.id, req.body))[0];
        
        if(result){
            return res.send({ updated : req.params.id });
        }

        return res.send({ updated : false });
    }

    public async remove(req : IRemoveRequest, res : express.Response){
        try {
                
            const status = await Models.crud().remove(req.params.id);
            
            res.send({ removed : status === 1 });
        } catch (error) {
            res.send({ 
                removed : false,
                error : 'this model contains multiple vehicles associated, cannot remove' 
            })
        }
    }
}