class Manager extends Employee {
    constructor(officeNumber) {
       super(...arguments);
       this.officeNumber;
    }

    getRole() {}
}

module.exports = Manager;