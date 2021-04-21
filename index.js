const inquirer = require('inquirer');
const fs = require('fs');
// const Manager = require('./lib/manager')
// const getManagerInfo = require('./lib/manager')

const getEmployeeInfo = [
    {
        type: 'input',
        message: 'What is their name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What is their role?',
        name: 'role',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    },
]

const initEmployee = () => {
    inquirer.prompt(getEmployeeInfo)
    .then((data) => {
       const employee = new Employee(data.name, data.id, data.email);
       const employeeType = `${data.role}`;

       console.log(employee);
       console.log(employeeType);

    //    getEmployeeType(employeeType);
        getManagerInfo();
    })
}

// function getEmployeeType(employeeType) {
//     if (employeeType === 'Manager') {
//         inquirer.prompt(getManagerInfo)
//         .then((data) => {
//             const manager = new Manager(data.officeNumber);
//             console.log(manager);
//         })
//         console.log(employeeType)
//     }
        
// }

initEmployee();

