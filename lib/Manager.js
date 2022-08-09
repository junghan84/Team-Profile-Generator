const Employee = require("./Empolyee");

class Manager extends Employee {
    constructor(name, id, email, position, officeNumber){
        supper(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager;