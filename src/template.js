// Creates the whole team
const generateTeam = team => {

    // Creates HTML card for manager.
    const managerHTML = manager => {
        return `
        <div class="card employee-card>
            <div class="card-header bg-primary text-white>
                <h2 class="card-title>${manager.getName()}</h2>
                <h3 class="card-title><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`;
    };

    // Create HTML card for engineer
    const engineerHTML = engineer => {
        return`
        <div class="card employee-card>
            <div class="card-header bg-primary text-white>
                <h2 class="card-title>${engineer.getName()}</h2>
                <h3 class="card-title><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">GitHub: ${manager.getGithub()}</li>
                </ul>
            </div>
        </div>`;
    };

    // Create HTML for intern card
    const internHTML = intern => {
        return `
        <div class="card employee-card>
            <div class="card-header bg-primary text-white>
                <h2 class="card-title>${intern.getName()}</h2>
                <h3 class="card-title><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
    };

    // Empty container to push all the employee cards.
    const html = [];

    html.push(team
        .filter(employee =>employee.getRole() === "Manager")
        .map(manager => engineerHTML(manager))
    );  

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerHTML(engineer))
    );
    
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internHTML(intern))
    );

    return html.join("");
};

// Will export function to generate the full HTML page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>

        <title>Team Members</title>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                        <h1 class="text-center text-white">My Team</h1>
                    </div>
                </div>
            </div>
        
            <div class="container">
                <div class="row">
                    <div class="row team-area col-12 d-flex justify-content-center">
                        ${generateTeam(team)}
                    </div>
                </div>
            </div>
        </body>
    </html>`;
};