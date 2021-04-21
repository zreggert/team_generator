const Employee = require('../index');

class Manager extends Employee {
    constructor(officeNumber) {
       super(name, id, email);
       this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

const getManagerInfo = [
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber'
    }
]

module.exports = {
    Manager,
    getManagerInfo
};