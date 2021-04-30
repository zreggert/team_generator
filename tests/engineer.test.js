const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("creates an instance of class Engineer", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });
});