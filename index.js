const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

teamArray [];

//Function to run the app
function startApp() {

    // Nested with function to create team by showing prompts
    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee would you like to add to your team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "Team is maxed"]
        }])
        .then(function (userInput) {
            // Will switch to invoke a function depending on user input
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuild();
            }
        })
    } 
}

// Object Oriented Programming Functions
// Function to add a manager
function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },

        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    })
}