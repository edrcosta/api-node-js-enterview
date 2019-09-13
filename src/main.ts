import * as express from 'express';
import * as bodyparser from 'body-parser';

import { Config } from './helpers';
import { Endpoints } from './endpoints';
import { IEndpoint } from './interfaces';

const config = Config.get();
const app = express();

app.use(bodyparser.json({limit: '20mb'}));

Endpoints.forEach((endpoint : IEndpoint) => 
    app[endpoint.method](endpoint.url, endpoint.handdler)
);

app.listen(config.server.port, () => console.log(`listening on port ${config.server.port} :)`));