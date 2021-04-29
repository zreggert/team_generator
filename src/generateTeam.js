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
        
        `)
    });
    return profilesArr.join('');
}

module.exports = generateHtml