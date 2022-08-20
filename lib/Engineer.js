// In addition to 'Employee' properties and methods, 'Engineer' will also have the following
// Properties: github - GitHub username
// Method: getGithub(), getRole() - overidden to return 'Engineer'

// Imports 'Employee'
const Employee = require("./Employee");

// 'Engineer' extends 'Employee'
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // List of methods required
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

// Exports Engineer.js
module.exports = Engineer;