const employee = require("./employee");
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
class engineer extends employee {
	constructor(github) {
		super(github);
		this.github = github;

	}
    github(){
        return this.github;

    }
    getrole(){
        return "engineer"
    }
}
module.exports = engineer;