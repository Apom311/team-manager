const createTeam = team => {

    const createManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="name">${manager.getName()}</h2>
                <h3 class="position">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="id">ID: ${manager.getId()}</li>
                    <li class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="office-number">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const createEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="name">${engineer.getName()}</h2>
                <h3 class="position">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="id">ID: ${engineer.getId()}</li>
                    <li class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    const createIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="name">${intern.getName()}</h2>
                <h3 class="position">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="id">ID: ${intern.getId()}</li>
                    <li class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="school">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class = container>
        <div class="card">
            <div class="card-header">
                <h2 class="name">Name: <span>Jeffrey</span></h2>
                <h2 class="position">Position: <span>Leader</span></h2>
            </div>
            <div class="card-body">
                ${createTeam(team)}
            </div>
        </div>
    </main>
</body>
</html>`
};