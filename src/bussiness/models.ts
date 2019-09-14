import { Crud } from './crud';

export class ModelsBO extends Crud {
    constructor(){
        super('models', ['id', 'name']);
    }
}