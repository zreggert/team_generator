const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(...arguments);
        this.school = school;
    }

    getSchool() {}

    getRole() {}
}

module.exports = Intern;