function generateTeamHtml(team) {

	function managerHtml(manager) {
        return `
        <div>
        <h1> ${manager.getName()}</h1>
        </div>
        `;
    }

	function engineerHtml(engineer) {}

	function internHtml(intern) {}

	const html = [];

	html.push(
		team
			.filter((data) => data.getRole() === "Manager")
			.map((manager) => managerHtml(manager))
	);


    return html.join('');
}

module.exports = (teamData) => {
	return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${generateTeamHtml(teamData)}
    </body>
    </html>
    
    `;
};
