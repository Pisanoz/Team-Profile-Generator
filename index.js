const inquirer = require("inquirer");
const manager = require("./Employee/manager");
const engineer = require("./Employee/engineer");
const intern = require("./Employee/intern");
const employee = require("./Employee/employee");
// const generateHTML = require("./generatehtml");

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
		type: "list",
		name: "role",
		message: "role?",
		choices: ["Manager", "Engineer", "Intern"],
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
const teamembers = [];
let memberrole = "";
function employeeentery() {
	inquirer.prompt(employeequestion).then(function (data) {
		if (data.role == manager) {
			inquirer.prompt(managerquestions).then(function (data1) {
				memberrole = data1.office;
				teamembers.push([
					data.name,
					data.role,
					data.id,
					data.email,
					memberrole,
				]);
				nextmember();
			});
		} else if (data.role == "engineer") {
			inquirer.prompt(engineerquestions).then(function (data1) {
				memberrole = data1.github;
				teamembers.push([
					data.name,
					data.role,
					data.id,
					data.github,
					memberrole,
				]);
				return nextmember();
			});
		} else {
			inquirer.prompt(internquestions).then(function (data1) {
				memberrole = data1.school;
				teamembers.push([
					data.name,
					data.role,
					data.id,
					data.school,
					memberrole,
				]);
				return nextmember();
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
				console.log(teamembers);
			}
		});
}

function type(data) {}
init();
