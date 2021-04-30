const Intern = require('../lib/intern');

describe("Intern", () => {
    it("creates an instance of class Intern", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    });
});