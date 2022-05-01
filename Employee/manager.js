const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./employee");
const employee = require("./employee");

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
