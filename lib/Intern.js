const Employee = require("./Employee");

class Intern extends Employee {
   constructor(name, id, email, position, school){
    super(name, id, email);
    this.school = this.school;
   }
   getSchool(){
    return this.school;
   }    
}

module.exports = Intern;