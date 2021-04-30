const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("creates an instance of class Engineer", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });

    it("constructor adds github as a 4th arugment", () => {
        const github = 'GitHub'
        const engineer = new Engineer('Bob', 1, "demo@test.com", github);
        expect(engineer.github).toBe(github);
    });

    describe("getGithub()", () => {
        it("returns the github argument", () => {
            const github = 'GitHub'
            const engineer = new Engineer('Bob', 1, "demo@test.com", github);
            expect(engineer.getGithub()).toBe(github);
        })
    });

    describe("getRole()", () => {
        it("returns the string: Engineer", () => {
            const role = "Engineer";
            const engineer = new Engineer();
            expect(engineer.getRole()).toBe(role)
        })
    });
});