const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { describe } = require('yargs');
const { it } = require('node:test');

describe("Manager", () => {
    it("should have an office number", () => {
        const david = new Manager("David", 3, "david@david.com", "Manager", 5);
        expect(david.oNum).toEqual(5);
    });

    it("should throw an error if no input is provided", () => {
        const cb = () => new Manager("David", 12, "david@david.com", "Manager");

        const err = new Error("You can't attend a number...")

        expect(cb).toThrowError(err)
    });

    it("should throw an error if input is not a number", () => {
        const cb = () => new Intern("David", 12, "david@david.com", "Intern", "squirrel");

        const err = new Error("Should you really be a manager...")

        expect(cb).toThrowError(err)

    });
})