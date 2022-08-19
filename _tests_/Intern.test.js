const Intern = require('../lib/Intern');

describe ("Intern", () => {
    it("Should have a role name of Intern", () => {
        const david = new Intern("David", 12, "david@david.com", "Intern", "An actual dump");

        expect(david.school).toEqual("An actual dump");
    });

    it("get role by command", () => {
        const david = new Intern("David", 12, "david@david.com", "Intern", "nowhere");

        expect(david.getRole()).toBe("Intern");
    });

    it("Can get office number by command", () => {
        const testSchool = "An Actual Dump";
        const david = new Intern("David", 12, "david@david.com", "Intern", testSchool);

        expect(david.getSchool()).toBe(testSchool);

    });
})