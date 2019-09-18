"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const bussiness_1 = require("../src/bussiness");
let vehicles = new bussiness_1.VehiclesBO();
describe('CRUD: Vehicles', function () {
    describe('>>> Method list', () => {
        it('should return an array of vehicles', () => vehicles.list(1).then((data) => {
            assert.equal(typeof data, 'object');
        }));
        it('should return contain valid vehicle elements', () => vehicles.list(1).then((data) => {
            data.forEach((vehicle) => {
                assert.equal(typeof vehicle.id, 'number');
                assert.equal(typeof vehicle.value, 'string');
                assert.equal(typeof vehicle.year_model, 'number');
                assert.equal(typeof vehicle.fuel, 'string');
                assert.equal(typeof vehicle['model.id'], 'number');
                assert.equal(typeof vehicle['model.name'], 'string');
                assert.equal(typeof vehicle['brand.id'], 'number');
                assert.equal(typeof vehicle['brand.name'], 'string');
            });
        }));
    });
});
//# sourceMappingURL=test.vehicle.js.map