import { Response } from 'express';
import { IAuthRequest } from '../interfaces';
import { Config } from '../helpers';

import * as jwt from 'jsonwebtoken';

export class Authentication{

    public async login(req : IAuthRequest, res : Response){

        const config = Config.get();

        //Mock of users
        let users = [
            {
                id: 1,
                username: 'admin',
                password: '123'
            }
        ];

        const { username, password } = req.body;

        for (let user of users) {
            if (username == user.username && password == user.password) {

                let token = jwt.sign({ id: user.id, username: user.username }, config.jwt_secret, { expiresIn: 129600 });

                res.json({
                    sucess: true,
                    err: null,
                    token
                });
                break;
            }
            else {
                res.status(401).json({
                    sucess: false,
                    token: null,
                    err: 'Username or password is incorrect'
                });
            }
        }
    }
}