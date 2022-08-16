const { it } = require('node:test');
const Intern = require('../lib/Intern');

describe ("Intern", () => {
    it("Should have a role name of Intern", () => {
        const david = new Intern("David", 12, "david@david.com", "Intern", "An actual dump");

        expect(david.school).toEqual("An actual dump");
    });

    it("should throw an error if school name is not provided", () => {
        const cb = () => new Intern("David", 12, "david@david.com", "Intern");

        const err = new Error("All Interns must be in attendance")

        expect(cb).toThrowError(err)
    });

    it("should throw an error if school name is not a string", () => {
        const cb = () => new Intern("David", 12, "david@david.com", "Intern", 13);

        const err = new Error("You can't attend a number...")

        expect(cb).toThrowError(err)
    });
})