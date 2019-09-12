// Map Endpoints configs 
import { Brands } from './controllers';

let brands = new Brands();

export const Endpoints = [
    { method : 'get', url : '/create', handdler : brands.create },
    { method : 'get', url : '/get', handdler : brands.get },
    { method : 'get', url : '/getOne', handdler : brands.getOne },
    { method : 'get', url : '/update', handdler : brands.update },
    { method : 'get', url : '/remove', handdler : brands.remove },
];