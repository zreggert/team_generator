// const Manager = require('../lib/manager');
// const Engineer = require('../lib/engineer');
// const Intern = require('../lib/intern');

function getRoleSpecificInfo(member) {
    // console.log(member);
    if (member.getRole() === 'Manager') {
        return `${member.getOfficeNumber()}`;
    } else if (member.getRole()=== 'Engineer') {
        return `${member.getGithub()}`;
    } else if (member.getRole() === 'Intern') {
        return `${member.getSchool()}`;
    }
}


function generateHtml(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Dev Team One</h1>
        </header>
        <main>
            <section>
                <div class="team-container">
                    <p>${memberProfiles(team)}</p>
                </div>
            </section>
        </main>
        
    </body>
    </html>`
}


// creates an array of the html for each team member added to the team
function memberProfiles(team) {
    let profilesArr = [];

    team.forEach((member) => {
        profilesArr.push(`
        <div class="member-container">
            <div class="name-role">
                <h4 class="member-name">${member.getName()}</h4>
                <h4 class="member-role">${member.getRole()}</h4>
            </div>
            <div class="member-info">
                <ul class="info-list">
                    <li class="employee-id">ID:${member.getId()}</li>
                    <li class="employee-email">Email:${member.getEmail()}</li>
                    <li class="role-info">${getRoleSpecificInfo(member)}</li>
                </ul>
            </div>
        </div>
        `)
    });
    return profilesArr.join('');
}

module.exports = generateHtml