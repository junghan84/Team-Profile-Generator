const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, position, github){
        super(name, id, email, position);
        this.github = github;
    }
    getGithhub(){
        return this.github;
    }
}

module.exports = Engineer;