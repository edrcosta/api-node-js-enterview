import * as assert from 'assert';
import { VehiclesBO } from '../src/bussiness';
import { IVehicle } from '../src/interfaces';

beforeEach( (done) => { setTimeout(() => { done() }, 200) }); 

let vehicles = new VehiclesBO();

describe('CRUD: Vehicles', function() {

	describe('>>> Method list', () => {

		it('should return an array of vehicles', () => 
			vehicles.list(1).then((data :  Array<IVehicle>) => {	
				assert.equal(typeof data, 'object');
			})
		);

		it('should return contain valid vehicle elements', () =>
			vehicles.list(1).then((data :  Array<IVehicle>) => {	
				data.forEach((vehicle : IVehicle) => {
                    assert.equal(typeof vehicle.id, 'number');
                    assert.equal(typeof vehicle.value, 'string');
                    assert.equal(typeof vehicle.year_model, 'number');
                    assert.equal(typeof vehicle.fuel, 'string');
                    assert.equal(typeof vehicle['model.id'], 'number');
                    assert.equal(typeof vehicle['model.name'], 'string');
                    assert.equal(typeof vehicle['brand.id'], 'number');
                    assert.equal(typeof vehicle['brand.name'], 'string');
				});
			})
		);
	});
});
