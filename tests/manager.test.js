const Manager = require('../lib/manager')

describe("Manager", () => {
    it("creates an instance of class Manager", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    });

    it("constructor adds officeNumber as a 4th arugment", () => {
        const officeNumber = 3300;
        const manager = new Manager('Bob', 1, "demo@test.com", officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });

    describe("getOfficeNumber()", () => {
        it("returns the officeNumber argument", () => {
            const officeNumber = 3300;
            const manager = new Manager('Bob', 1, "demo@test.com", officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        })
    });

    describe("getRole()", () => {
        it("returns the string: Manager", () => {
            const role = "Manager";
            const manager = new Manager();
            expect(manager.getRole()).toBe(role)
        })
    });
});