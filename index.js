const inquirer = require("inquirer");
const manager = require("./Employee/manager");
const engineer = require("./Employee/engineer");
const intern = require("./Employee/intern");
const employee = require("./Employee/employee");
const generateHTML = require("./generateHTML");
const Fs = require("fs");
let memrole = "";
const employeequestion = [
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
		name: "role",
		message: "Employee's Role",
	},
];

const managerquestions = [
	{
		type: "input",
		name: "office",
		message: "Manager's office number",
	},
];
const engineerquestions = [
	{
		type: "input",
		name: "github",
		message: "Engineer's github",
	},
];
const internquestions = [
	{
		type: "input",
		name: "school",
		message: "Intern's school",
	},
];
function init() {
	employeeentery();
}

function employeeentery() {
	inquirer.prompt(employeequestion).then(function (data) {
		if (data.memrole == manager) {
			inquirer.prompt(managerquestions).then(function (data) {
				memrole = data.office;
				teammember.push([data.name, data.role, data.id, data.email, memrole]);
			});
		} else if (data.role == "engineer") {
			inquirer.prompt(engineerquestions).then(function (data) {
				memrole = data.github;
				teammember.push([data.name, data.role, data.id, data.email, memrole]);
				nextmember();
			});
		} else {
			inquirer.prompt(internquestions).then(function (data) {
				memrole = data.school;
				teammember.push([data.name, data.role, data.id, data.email, memrole]);
				nextmember();
			});
		}
	});
}
function nextmember() {
	inquirer
		.prompt({
			type: "list",
			name: "NewMember",
			message: "Do you want add a new member?",
			choices: ["yes", "No"],
		})
		.then(function (data) {
			if (data.NewMember == "yes") {
				employeeentery();
			} else {
				console.log(teammember);
				Fs.writeFile("index.html", generateHTML(teammembers), function (err) {
					err ? console.log(err) : console.log("Success");
				});
			}
		});
}
function generateCard(team) {
	const arr = [];

	team.forEach((object) => {
		if (object.getRole() == "manager") {
			arr.push(object.getRender());
		} else if (object.getRole() == "engineer") {
			arr.push(object.getRender());
		} else if (object.getRole() == "intern") {
			arr.push(object.getRender());
		}
	});
	return arr;
}


function type(data) {}
init();
type();
