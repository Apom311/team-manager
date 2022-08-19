
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
    });
})