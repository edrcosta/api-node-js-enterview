import * as express from 'express';
import { ModelsBO } from '../bussiness';
import { IGetRequest } from '../interfaces';

export class Models{

    async get(req : IGetRequest, res : express.Response){
        res.send(await ModelsBO.get(req.page ? req.page : 1));
    }
    
    getOne(req : express.Request, res : express.Response){
        res.send('getOne');
    }

    create(req : express.Request, res : express.Response){
        res.send('create');
    }

    update(req : express.Request, res : express.Response){

        res.send('update');
    }

    remove(req : express.Request, res : express.Response){

        res.send('remove');
    }
}