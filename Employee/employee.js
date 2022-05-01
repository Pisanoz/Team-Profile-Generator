const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

class employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getname() {
		return this.name;
	}
	getid() {
		return this.name;
	}
	getemail() {
		return this.email;
	}
	getrole() {
		return "employee";
	}
}
module.exports = employee;
