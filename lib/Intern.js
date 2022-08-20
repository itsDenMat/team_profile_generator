// In addition to 'Employee' properties and methods, 'Intern' will also have the following
//  Properties: school
// Methods: getSchoo(), getRole() - overidden return 'Intern'

// Imports 'Employee'
const Employee = require("./Employee");

// 'Intern' extends 'Employee'
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    // List of methods required
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Exports Intern.js
module.exports = Intern;