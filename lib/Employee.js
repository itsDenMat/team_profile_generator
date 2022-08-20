// 'Employee' is a parent class with the following properties and methods
// Properties: name, id, email
// Methods: getName(), getId(), getEmail(), getRole() - returns as 'Employee'

// Creates 'Employee' class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // List of all the methods required
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// Exports Employee.js
module.exports = Employee;
