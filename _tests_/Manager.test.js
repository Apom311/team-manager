const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe("Manager", () => {
    it("should have an office number", () => {
        const testNumber = 5;
        const david = new Manager("David", 3, "david@david.com", "Manager", testNumber);
        expect(david.officeNumber).toBe(testNumber);
    });

    it("get role by command", () => {
        //const testRole = "Manager";
        const david = new Manager("David", 12, "david@david.com", "Manager", 5);

        expect(david.getRole()).toBe("Manager");
    });

    it("Can get office number by command", () => {
        const testNumber = 50;
        const david = new Manager("David", 12, "david@david.com", "Manager", testNumber);

        expect(david.getOfficeNumber()).toBe(testNumber);

    });
})