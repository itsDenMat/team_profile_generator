// Import Manager.js
const Manager = require("../lib/Manager");

// TEST FOR MANAGER
// Test for office number entry
test("Can the app create an office number.", () => {
    const testOfficeNumber = 4;
    const employeeTest = new Manager("Jimmy", 3, "jimmy@gmail.com", testOfficeNumber);
    expect(employeeTest.officeNumber).toBe(testOfficeNumber);
});

// getOfficeNumber() test
test("Can it retrieve office number through getOfficeNumber method.", () => {
    const testOfficeNumber = 4;
    const employeeTest = new Manager("Jimmy", 3, "jimmy@gmail.com", testOfficeNumber);
    expect(employeeTest.getOfficeNumber()).toBe(testOfficeNumber);  
});

// getRole() test
test("Checking role.", () => {
    const returnValue = "Manager";
    const employeeTest = new Manager("Jimmy", 3, "jimmy@gmail.com", 4);
    expect(employeeTest.getRole()).toBe(returnValue);
});