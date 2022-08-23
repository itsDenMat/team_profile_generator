// Import Employee.js
const Employee = require("../lib/Employee");

// TESTS FOR EMPLOYEE 

test("Can the app create a new employee.", () => {
    const employeeTest = new Employee ();
    expect(typeof(employeeTest)).toBe("object");
})

test("Checking name.", () => {
    const name = "Jimmy";
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
})

test("Checking ID.", () => {
    const id = 3;
    const employeeTest = new Employee("Jimmy", id);
    expect(employeeTest.id).toBe(id);
})

test("Checking email.", () => {
    const email = "jimmy@gmail.com";
    const employeeTest = new Employee("Jimmy", 3, email);
    expect(employeeTest.email).toBe(email);
})

test("Can retrieve name through getName method.", () => {
    const testName = "Jimmy";
    const employeeTest = new Employee(testName);
    expect(employeeTest.getName()).toBe(testName);
})

test("Can retrieve ID through getID method", () => {
    const testID = 3;
    const employeeTest = new Employee(testID);
    expect(employeeTest.getId()).toBe(testID);
})

test("Can retrieve email through getEmail method.", () => {
    const testEmail = jimmy@gmail.com;
    const employeeTest = new Employee("Jimmy", 2, testEmail);
    expect(employeeTest.getEmail()).toBe(testEmail);
})

test("Checking role.", () => {
    const returnValue = "Employee";
    const employeeTest = new Employee("Jimmy", 2, "jimmy@gmail.com");
    expect(employeeTest.getRole()).toBe(returnValue);
})