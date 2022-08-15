//6 7 2
//import packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//import classes
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const render = require('./src/generateTemplate');
const DIS_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIS_DIR, "team.html");


//Handles promts
 team = [];

//function wrap everything
//create object to call the data 
// crete function creat team
//Add new manager

//create function 
function actionApp(){

  function createTeam() {
    inquirer.prompt([{
        type: 'list',
        message: "What type of employee would you like to add to your team?",
        name: 'addEmployee',
        choices: ['Add Engineer', 'Add Interen', 'My team is complete!'],
     }]).then(function(userInput){
        switch(userInput.addEmployee){
            case "Manager":
            addManager();
            break;
            case "Engineer":
            addEngineer();
            break;
            case "Inter":
            addIntern();
            break;

            default:
                teamBuilt();

        }
     })

  }
    function addManager() {
        inquirer.prompt([
    
            {
                type: 'confirm',
                name: 'position',
                message: "Welcome to the Team Profile Generator! Please Enter anykey! "
            },
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the name"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Please enter ID number"
            },
    
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter your email address"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Please enter your office number"
            }, 
        ]) .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            team.push(manager);
            createTeam();
        });
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter the name"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Please enter ID number"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter your email address"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter your Github username"
            },
        ]) .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter the name"
            },
            {
                type: 'input',
                name: 'internId',
                message: "Please enter ID number"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter your email address"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Which school are you atteding?"
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(intern);
            createTeam();
        });  
    }

    
    function teamBuilt() {
        fs.writeFileSync(distPath, render(team), "utf-8");
    }

    createTeam();

}
actionApp();




    

  
