const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./employee");

const jest = require("jest");

class manager extends employee {
	constructor(office) {
		super(office);
		this.office = office;
	}
	getoffice() {
		return this.office;
	}
	getrole() {
		return "manager";
	}
}
module.exports = manager;
