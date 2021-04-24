const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
       super(...arguments);
       this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}


module.exports = Manager