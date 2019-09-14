import * as express from 'express';
import { BrandsBO } from '../bussiness';
import { IGetRequest, IRemoveRequest, IUpdateRequest, ICreateRequest, IModel } from '../interfaces';

export class Brands{

    static crud = () => new BrandsBO();

    public async list(req : IGetRequest, res : express.Response){
        res.send( await Brands.crud().list(req.body.page));
    }
    
    public async getOne(req : any, res : express.Response){
        
        let row = (await Brands.crud().getOne(req.params.id))[0];

        res.send(row ? row : { error : `Not found id: ${req.params.id}`});
    }

    public async create(req : ICreateRequest<IModel>, res : express.Response){

        let err = await Brands.crud().validate(req.body);
        
        if(err) return res.send(err);
        
        let isUnique = (await Brands.crud().checkExistsByName({ name : req.body.name})) === 0;

        if(!isUnique) return res.send({
            error : 'this brand name aready exists'
        });

        return res.send( await Brands.crud().create(req.body));
    }

    public async update(req : IUpdateRequest<IModel>, res : express.Response){
        
        let err = await Brands.crud().validate(req.body);

        if(err) return res.send(err);
        
        let isUnique = (await Brands.crud().checkExistsByName({ name : req.body.name})) === 0;

        if(!isUnique) return res.send({
            error : 'this brand name aready exists'
        });

        let result = (await Brands.crud().update(req.params.id, req.body))[0];

        if(result){
            return res.send({ updated : req.params.id });
        }

        return res.send({ updated : false });
    }

    public async remove(req : IRemoveRequest, res : express.Response){
        try {
            
            const status = await Brands.crud().remove(req.params.id);
            
            res.send({ removed : status === 1 });   
        } catch (error) {
            res.send({ 
                removed : false,
                error : 'this brand contains multiple vehicles associated, cannot remove' 
            })
        }
    }
}