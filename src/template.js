// Creates the whole team
const generateTeam = team => {

    // Creates HTML card for manager
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

    const internHTML = intern => {
        return `
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
}