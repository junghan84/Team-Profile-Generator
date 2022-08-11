//6 7
//import packages
const inquirer = require('inquirer');
const fs = require('fs');

//import classes
const Employee= require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//import HTML templates
const addEmployee = require('./src/employee.js');
const addManager = require('./src/manager');
const addEngineer = require('./src/engineer.js');
const addIntern = require('./src/inter.js');


//Handles promts
const team =[];

//promt manager
const Managers = [
    {
        type: 'confirm',
        name: 'position',
        message: "Welcome to the Team Profile Generator! Please Enter anykey! "
    },
    {
        type: 'input',
        name: 'name',
        message: "Please enter the name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter your office number"
    },
    {
        type: 'list',
        name: 'nextEmployee',
        choices:['Add Engineer','Add Interen', 'My team is complete!'],
        message: "Next"
    },

]