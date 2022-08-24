// Import Engineer.js
const Engineer = require("../lib/Engineer");

// TEST FOR ENGINEER
// Create GitHub check
test("Can the app create a GitHub link.", () =>{
    const testGitHub = "JimmyGit";
    const employeeTest = new Engineer("Jimmy", 3, "jimmy@gmail.com", testGitHub);
    expect(employeeTest.github).toBe(testGitHub);
});

// TEST FOR RETRIEVAL USING METHODS in Engineer.js
// getGithub() test
test("Can it retrieve GitHub through getGithub method.", () => {
    const testGitHub = "JimmyGit";
    const employeeTest = new Engineer("Jimmy", 3, "jimmy@gmail.com", "JimmyGit");
    expect(employeeTest.getGithub()).toBe(testGitHub);
});

// getRole() test
test("Checking role.", () => {
    const returnValue = "Engineer";
    const employeeTest = new Engineer("James", 3, "jimmy@gmail.com", "JimmyGit");
    expect(employeeTest.getRole()).toBe(returnValue);
})