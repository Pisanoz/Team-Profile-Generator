function generateTeamHtml(team) {

	function managerHtml(manager) {
        return `
        <div class="card d-flex w-100 justify-content-between text-white bg-primary">
        <h1 class="card-title"> ${manager.getName()}</h1>
        <ul class="list-group">
        <li class="list-group-item"> ${manager.getid()}</li>
        <li class="list-group-item"> ${manager.getemail()}</li>
        <li class="list-group-item"> ${manager.getoffice()}</li>
        </ul>
        </div>
        `;
    }

	function engineerHtml(engineer) {
        return`
        <div class="card d-flex w-100 justify-content-between text-white bg-primary">
        <h1 class="card-title"> ${engineer.getName()}</h1>
        <ul class="list-group">
        <li class="list-group-item"> ${engineer.getid()}</li>
        <li class="list-group-item"> ${engineer.getemail()}</li>
        <li class="list-group-item"> ${engineer.getgithub()}</li>
        </ul>
        </div>
        `
    }

	function internHtml(intern) {
        return`
        <div class="card d-flex w-100 justify-content-between text-white bg-primary">
        <h1 class="card-title"> ${intern.getName()}</h1>
        <ul class="list-group">
        <li class="list-group-item"> ${intern.getid()}</li>
        <li class="list-group-item"> ${intern.getemail()}</li>
        <li class="list-group-item"> ${intern.getschool()}</li>
        </ul>
        </div>
        `
    }

	const html = [];

	html.push(
		team
			.filter((data) => data.getRole() === "Manager")
			.map((manager) => managerHtml(manager))
	);
html.push(
    team
    .filter((data)=> data.getRole()==="engineer")
    .map((engineer)=> engineerHtml(engineer))
)
html.push(
    team
    .filter((data)=> data.getRole()=== "intern")
    .map((intern)=> internHtml(intern))
)

    return html.join('');
}

module.exports = (teamData) => {
	return `<!-- <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Team Profile Generator</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                rel="bootstrap"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="./assets/style.css" />
        </head>
        <body>
            <h1 id="Header">Team</h1>
            <section id="teamembers"></section>
            <script
                src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"
            ></script>
    
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
                integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                crossorigin="anonymous"
            ></script>
            <script src="index.js" async defer></script>
        </body>
    </html> -->
    
    `;
};
