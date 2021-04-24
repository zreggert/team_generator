const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(...arguments);
        this.github = github;
    }

    getGithub() {}

    getRole() {}
}

module.exports = Engineer;