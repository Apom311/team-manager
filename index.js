const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const render = require('./templates/temp.js');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');


const teamMember = [];

function startUp() {
    function createEmployee() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "What is this Employee's Position?",
                    choices: [
                        'Manager',
                        'Engineer',
                        'Intern',
                        'End of List'
                    ],
                },
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your Employee's name?"
                },
                {
                    type: 'input',
                    name: 'name',
                    message: "What is this Employee's ID number?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter their email-address.",
                }, 
            ])
            .then((createInput) => {
                if(createInput.role = 'Manager'){
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'oNum',
                                message: "Enter Manager's Office Number",
                            },
                        ])
                    
                }else if(createInput.role = 'Engineer'){
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'github',
                                message: "Enter Github Profile for Engineer",
                            },
                        ])
                }else if(createInput.role = 'Intern'){
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'school',
                                message: "Enter Academy Name",
                            },
                    ])
                }else{
                return buildTeam();
                };
                teamMember.push(createInput);
            })
            .then((another) =>{
                inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'hire',
                            message: "Do you want to add another team member?",
                            choices: [
                                'yes',
                                'no'
                            ],
                        },
                    ])
                    if(another.hire = 'yes'){
                        createEmployee()
                    }else{
                        buildTeam();
                    }
            });
    }
    function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(teamMember), 'utf-8');
    }
    
    createEmployee();
}

startUp();