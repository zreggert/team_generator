const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(...arguments);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;