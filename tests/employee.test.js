const Employee = require('../lib/employee');

describe("Employee", () => {
    it("creates an instance of class Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
});
