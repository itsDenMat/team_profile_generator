// Import Employee.js
const Employee = require("../lib/Employee");

test("Can create a new employee.", () = > {
    const employeeTest = new Employee ();
    expect(typeof(employeeTest)).toBe("object");
})

