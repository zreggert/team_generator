const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHtml = require('./src/generateTeam')

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

const getInternInfo = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email'
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: 'school',
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
        if (data.role === 'Engineer') {
            inquirer.prompt(getEngineerInfo)
            .then((data => {
                console.log(data);
                let engineer = new Engineer(data.name, data.id, data.email, data.github)
                team.push(engineer);
                addEmployees();
            }))
        } else if (data.role === 'Intern') {
            inquirer.prompt(getInternInfo)
            .then((data => {
                console.log(data);
                let intern = new Intern(data.name, data.id, data.email, data.school)
                team.push(intern);
                addEmployees();
            }))
        } else {
            // console.log(team);
            generateHtml(team);
        }
    })
}





initTeam();

