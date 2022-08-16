const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe("Employee", () =>{

    describe ("Initialization", () => {
        it("should create an object with name, id, email, and role if provided with valid arguments", () => {
            const david = new Employee("David", 12, "david@david.com", "Employee");

            expect(david.name).toEqual("David");
            expect(david.id).toEqual(12);
            expect(david.email).toEqual("david@david.com");
            expect(david.role).toEqual("Employee");
        });

        it("should throw an error if provided with no arguments", () => {

            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("David", "david@david.com", "Employee");

            const err = new Error("Expected paramater 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(3, 2, "david@david.com", "Employee");
            const err = new Error("Expected parameter 'name' to ba a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not an email address set inside a string", () => {
            const cb = () => new Employee("David", 12, "david", "Employee");
            const err = new Error("Email address not valid");

            expect(cb).toThrowError(err);
        });
    });
});