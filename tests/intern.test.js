const Intern = require('../lib/intern');

describe("Intern", () => {
    it("creates an instance of class Intern", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    });

    it("constructor adds school as a 4th arugment", () => {
        const school = 'School'
        const intern = new Intern('Bob', 1, "demo@test.com", school);
        expect(intern.school).toBe(school);
    });

    describe("getSchool()", () => {
        it("returns the school argument", () => {
            const school = 'School'
            const intern = new Intern('Bob', 1, "demo@test.com", school);
            expect(intern.getSchool()).toBe(school);
        })
    });

    describe("getRole()", () => {
        it("returns the string: Intern", () => {
            const role = "Intern";
            const intern = new Intern();
            expect(intern.getRole()).toBe(role)
        })
    });
});