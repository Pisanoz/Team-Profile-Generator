const employee = require("./employee");
const fs = require("fs");
const inquirer = require("inquirer");
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
