function generateHtml(team) {
    // console.log(team);
    team.forEach((member) => {
        console.log(`${member.getName()}`);
        console.log(member.getRole())
    });
}

module.exports = generateHtml