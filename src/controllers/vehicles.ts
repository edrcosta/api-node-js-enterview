import * as express from 'express';

export class Vehicles{
    create(req : express.Request, res : express.Response){
        console.log(req);
        res.send('create');
    }

    get(req : express.Request, res : express.Response){
        console.log(req);
        res.send('get');
    }

    getOne(req : express.Request, res : express.Response){
            console.log(req);
        res.send('getOne');
    }

    update(req : express.Request, res : express.Response){
            console.log(req);
        res.send('update');
    }

    remove(req : express.Request, res : express.Response){
            console.log(req);
        res.send('remove');
    }
}