"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const bussiness_1 = require("../src/bussiness");
beforeEach((done) => { setTimeout(() => { done(); }, 100); });
let brands = new bussiness_1.BrandsBO();
let firstId = 0, createdId = 0; //Store ids of created itens to update and then remove
const getRand = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
describe('CRUD: Brands', function () {
    describe('>>> Method list', () => {
        it('should return an array of brands', () => brands.list(1).then((data) => {
            if (data.length > 0)
                firstId = data[0].id;
            assert.equal(typeof data, 'object');
        }));
        it('should return contain valid brand elements', () => brands.list(1).then((data) => {
            if (data.length > 0) {
                data.forEach((brand) => {
                    assert.equal(typeof brand.id, 'number');
                    assert.equal(typeof brand.name, 'string');
                });
            }
        }));
    });
    describe('>>> Method get', () => {
        it('should return a valid brand element', () => {
            if (firstId > 0) {
                return brands.getOne(firstId).then((data) => {
                    assert.equal(typeof data[0].id, 'number');
                    assert.equal(typeof data[0].name, 'string');
                });
            }
            else {
                console.log('WARNING: YOUR DATABASE DONT HAVE BRANDS');
            }
        });
    });
    describe('>>> Method create', () => {
        it('should create a new brand element', () => brands.create({ name: getRand() }).then((created) => {
            createdId = created.id;
            assert.equal(typeof created.id, 'number');
            assert.equal(typeof created.name, 'string');
        }));
    });
    describe('>>> Method update', () => {
        it(`should update the created brand element`, () => brands.update(createdId, { name: getRand() }).then((status) => {
            assert.equal(status[0], 1);
        }));
    });
    describe('>>> Method remove', () => {
        it(`should remove the created brand element`, () => brands.remove(createdId).then((status) => {
            assert.equal(status, 1);
        }));
    });
});
//# sourceMappingURL=test.brands.js.map