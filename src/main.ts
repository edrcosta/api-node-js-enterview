import * as express from 'express';
import { Config } from './helpers';
import { Endpoints } from './endpoints';
import { IEndpoint } from './interfaces';

const config = Config.get();
const app = express();

Endpoints.forEach((endpoint : IEndpoint) => {
    app[endpoint.method](endpoint.url, endpoint.handdler);
});

app.listen(config.server.port, () => console.log(`listening on port ${config.server.port} :)`))