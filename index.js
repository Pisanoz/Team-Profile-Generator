const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./src/generateHTML");

const managerquestions = [
	{
		type: "input",
		name: "name",
		message: "Employee's name",
	},
	{
		type: "input",
		name: "id",
		message: "Employee's ID",
	},
	{
		type: "input",
		name: "email",
		message: "Employee's Email",
	},
	{
		type: "input",
		name: "office",
		message: "Manager's office number",
	},
];
const engineerquestions = [
	{
		type: "input",
		name: "name",
		message: "Employee's name",
	},
	{
		type: "input",
		name: "id",
		message: "Employee's ID",
	},
	{
		type: "input",
		name: "email",
		message: "Employee's Email",
	},
	{
		type: "input",
		name: "github",
		message: "Engineer's github",
	},
];
const internquestions = [
	{
		type: "input",
		name: "name",
		message: "Employee's name",
	},
	{
		type: "input",
		name: "id",
		message: "Employee's ID",
	},
	{
		type: "input",
		name: "email",
		message: "Employee's Email",
	},
	{
		type: "input",
		name: "school",
		message: "Intern's school",
	},
];

function init() {
	employeeentery();
}
const teamMembers = [];

function employeeentery() {
	inquirer.prompt(managerquestions).then(function (data) {
		const manager = new Manager(data.name, data.id, data.email, data.office);

		teamMembers.push(manager);
		nextmember();
	});
}

function nextmember() {
	inquirer
		.prompt({
			type: "list",
			name: "NewMember",
			message: "What would you like to do?",
			choices: ["Add a Engineer?", "Add an Intern?", "Done"],
		})
		.then(function (data) {
			switch (data.NewMember) {
				case "Add a Engineer?":
					addEngineer();
					break;
				case "Add an Intern?":
					addIntern();
					break;

				default:
					createTeam();
					break;
			}
		});
}

function addEngineer() {
	inquirer.prompt(engineerquestions).then(function (data) {
		const engineer = new Engineer(data.name, data.id, data.email, data.github);

		teamMembers.push(engineer);
		nextmember();
	});
}
function addIntern() {
	inquirer.prompt(internquestions).then(function (data) {
		const intern = new Intern(data.name, data.id, data.email, data.school);

		teamMembers.push(intern);
		nextmember();
	});
}
function createTeam() {
	fs.writeFileSync(
		path.join(path.resolve(__dirname, "dist"), "team.html"),
		generateHTML(teamMembers),
		"utf-8"
	);
}

// function type(data) {}
init();
