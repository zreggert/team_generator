const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager')

const team = [];

const getManagerInfo = [
    {
        type: 'input',
        message: 'Who is the team manager?',
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the manager's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'email'
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: 'officeNumber',
    },
]

const getEngineerInfo = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email'
    },
    {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: 'github',
    },
]

const getEmployeeType = [
    {
        type: 'list',
        message: "Are there any other members of this team?",
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'There are no more members to add.'
        ]
    }
]

const initTeam = () => {
    inquirer.prompt(getManagerInfo)
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        console.log(manager)
        team.push(manager);
        addEmployees(); 
    })
}

const addEmployees = () => {
    inquirer.prompt(getEmployeeType)
    .then((data) => {
        if (data.role = 'Engineer') {
            inquirer.prompt(getEngineerInfo)
            .then((data => {
                console.log(data);
            }))
        }
    })
}


initTeam();

