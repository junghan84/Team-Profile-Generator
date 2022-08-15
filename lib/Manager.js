const Employee = require("./Empolyee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        supper(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;