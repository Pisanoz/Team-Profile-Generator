const inquirer = require("inquirer");
const fs = require("fs");
const intern = require("./employee");
const employee = require("./employee");

class intern extends employee {
	constructor(school) {
		super(school);
		this.school = school;
	}
	getschool() {
		return this.school;
	}

	getrole() {
		return "intern";
	}
}
