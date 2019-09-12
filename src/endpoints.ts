import { Brands, Models, Vehicles } from './controllers';
import { IEndpoint } from './interfaces';

let brands = new Brands();
let models = new Models();
let vehicles = new Vehicles();

export const Endpoints : IEndpoint[] = [
    //Brands endpoints 
    { method : 'post', url : 'api/brands/', handdler : brands.create },
    { method : 'get', url : 'api/brands/', handdler : brands.get },
    { method : 'get', url : 'api/brands/:id', handdler : brands.getOne },
    { method : 'put', url : 'api/brands/:id', handdler : brands.update },
    { method : 'delete', url : 'api/brands/:id', handdler : brands.remove },
    //Models endpoints 
    { method : 'post', url : 'api/models/', handdler : models.create },
    { method : 'get', url : 'api/models/', handdler : models.get },
    { method : 'get', url : 'api/models/:id', handdler : models.getOne },
    { method : 'put', url : 'api/models/:id', handdler : models.update },
    { method : 'delete', url : 'api/models/:id', handdler : models.remove },
    //Vehicles endpoints 
    { method : 'post', url : 'api/vehicles/', handdler : vehicles.create },
    { method : 'get', url : 'api/vehicles/', handdler : vehicles.get },
    { method : 'get', url : 'api/vehicles/:id', handdler : vehicles.getOne },
    { method : 'put', url : 'api/vehicles/:id', handdler : vehicles.update },
    { method : 'delete', url : 'api/vehicles/:id', handdler : vehicles.remove },
];