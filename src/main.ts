import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as exjwt from 'express-jwt';

import { Config } from './helpers';
import { Endpoints } from './endpoints';
import { IEndpoint } from './interfaces';

const config = Config.get();
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${config.server.port}`);
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

// INstantiating the express-jwt middleware
const jwtMW = exjwt({ secret: config.jwt_secret});

Endpoints.forEach((endpoint : IEndpoint) => {
    if(endpoint.public){
        app[endpoint.method](endpoint.url, endpoint.handdler);
    }else{
        app[endpoint.method](endpoint.url, jwtMW, endpoint.handdler);
    }
});


// Error handling 
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});


app.listen(config.server.port, () => console.log(`listening on port ${config.server.port} :)`));