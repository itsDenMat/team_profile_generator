// Import Intern.js
const Intern = require("../lib/Intern");

// TEST FOR INTERN
// Test for school entry
test("Can the app create school entry.", () => {
    const testSchool = "School Entry";
    const employeeTest = new Intern("Jimmy", 3, "jimmy@gmail.com", testSchool);
    expect(employeeTest.school).toBe(testSchool);
});

// getSchool() test
test("Can it retrieve school name through getSchool method.", () => {
    const testSchool = "School Entry";
    const employeeTest = new Intern("Jimmy", 3, "jimmy@gmail.com", testSchool);
    expect(employeeTest.getSchool()).toBe(testSchool);  
});

// getRole() test
test("Checking role.", () => {
    const returnValue = "Intern";
    const employeeTest = new Intern("Jimmy", 3, "jimmy@gmail.com", "School Entry");
    expect(employeeTest.getRole()).toBe(returnValue);
});