function generateHtml(team) {
    // console.log(team);
    team.forEach((member) => {
        console.log(`${member.name}`)
    });
}

module.exports = generateHtml