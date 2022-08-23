// Required dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Connect library
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Connect html template
const generateTeam = require("./src/template.js");

// Paths
const generatedDIR = path.resolve(__dirname, "generated");
const generatedPath = path.join(generatedDIR, "team.html");

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
                // if user selected 'Manager'
                case "Manager":
                    addManager();
                    break;
                // if user selected 'Engineer'
                case "Engineer":
                    addEngineer();
                    break;
                // if user selected 'Intern'
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuild();
            }
        })
    } 


// Object Oriented Programming Functions
// Function to add a manager
function addManager() {
    // Prompts to collect data for manager
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Enter manager's name."
        },

        {
            type: "input",
            name: "managerId",
            message: "Enter manager's employee ID number."
        },

        {
            type: "input",
            name: "managerEmail",
            message: "Enter manager's email."
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter manager's office number."
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}

// Function to add Engineer
function addEngineer() {
    // Prompts to collect data for engineer
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter engineer's name."
        },

        {
            type: "input",
            name: "engineerId",
            message: "Enter engineer's employee ID number."
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "Enter engineer's email."
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "Enter engineer's GitHub username."
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });
}

// Function to add Intern
function addIntern() {
    // Prompts to collect data for intern
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter intern's name."
        },

        {
            type: "input",
            name: "internId",
            message: "Enter intern's employee ID number."
        },

        {
            type: "input",
            name: "internEmail",
            message: "Enter intern's email."
        },

        {
            type: "input",
            name: "internSchool",
            message: "Enter the school attended by intern."
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    });
}

// Function to start creating the HTML
function htmlBuild () {
    console.log("Team successfully created!");

    fs.writeFileSync(generatedPath, generateTeam(teamArray), "utf-8");
}

createTeam();
}

startApp();