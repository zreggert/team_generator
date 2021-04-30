const { TestScheduler } = require('@jest/core');
const Employee = require('../lib/employee');

describe("Employee", () => {
    it("creates an instance of class Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("constructor sets name as the first argument of instance", () => {
        const name = 'Bob';
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("constructor sets id as the second argument of instance", () => {
        const id = 1;
        const employee = new Employee("Bob", id);
        expect(employee.id).toBe(id);
    });

    it("constructor sets email as the third argument of instance", () => {
        const email = 'demo@test.com';
        const employee = new Employee("Bob", 1, email);
        expect(employee.email).toBe(email);
    });

    describe("getName()", () => {
        it("returns the name argument", () => {
            const name = 'Bob';
            const employee = new Employee(name);
            expect(employee.getName()).toBe(name)
        })
    });

    describe("getId()", () => {
        it("returns the id argument", () => {
            const id = 1;
            const employee = new Employee('Bob', id);
            expect(employee.getId()).toBe(id)
        })
    });

    describe("getEmail()", () => {
        it("returns the email argument", () => {
            const email = "demo@test.com";
            const employee = new Employee('Bob', 1, email);
            expect(employee.getEmail()).toBe(email)
        })
    });

    describe("getRole()", () => {
        it("returns the string: Employee", () => {
            const role = "Employee";
            const employee = new Employee();
            expect(employee.getRole()).toBe(role)
        })
    });
});
