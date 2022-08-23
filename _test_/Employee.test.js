// Import Employee.js
const Employee = require("../lib/Employee");

// TESTS FOR EMPLOYEE 
// Create new employee check
test("Can the app create a new employee.", () => {
    const employeeTest = new Employee ();
    // compares to see if both are object
    expect(typeof(employeeTest)).toBe("object");
})

// Create name check
test("Checking name.", () => {
    const name = "Jimmy";
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
})

// Create ID check
test("Checking ID.", () => {
    const id = 3;
    const employeeTest = new Employee("Jimmy", id);
    expect(employeeTest.id).toBe(id);
})

// Create email check
test("Checking email.", () => {
    const email = "jimmy@gmail.com";
    const employeeTest = new Employee("Jimmy", 3, email);
    expect(employeeTest.email).toBe(email);
})

// TEST OF RETRIEVAL USING METHODS in Employee.js
// getName() test
test("Can retrieve name through getName method.", () => {
    const testName = "Jimmy";
    const employeeTest = new Employee(testName);
    expect(employeeTest.getName()).toBe(testName);
})

// getID() test
test("Can retrieve ID through getID method", () => {
    const testID = 3;
    const employeeTest = new Employee("Jimmy", testID);
    expect(employeeTest.getId()).toBe(testID);
})

// getEmail() test
test("Can retrieve email through getEmail method.", () => {
    const testEmail = "jimmy@gmail.com";
    const employeeTest = new Employee("Jimmy", 2, testEmail);
    expect(employeeTest.getEmail()).toBe(testEmail);
})

// getRole()
test("Checking role.", () => {
    const returnValue = "Employee";
    const employeeTest = new Employee("Jimmy", 2, "jimmy@gmail.com");
    expect(employeeTest.getRole()).toBe(returnValue);
})