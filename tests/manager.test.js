const Manager = require('../lib/manager')

describe("Manager", () => {
    it("creates an instance of class Manager", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    });
});