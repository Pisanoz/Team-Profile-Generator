const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./employee");
const jest = require("jest");

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
module.exports = intern;