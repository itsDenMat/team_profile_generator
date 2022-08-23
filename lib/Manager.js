// In addition to 'Employee' properties and method, 'Manager' will also have the following
// Properties: officeNumber
// Method: getRole() - overidden to return 'Manager'

// Imports 'Employee'
const Employee = require("./Employee");

// 'Manager' extends 'Employee'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // List of methods required
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

// Exports Manager.js
module.exports = Manager;
