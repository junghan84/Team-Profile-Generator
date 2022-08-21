const Manager = require("../lib/Manager");

test("Create a manager object", () =>{
  
    const manager = new Manager("Joy", 9999, "joy@gmail.com", "999")

    expect(manager.officeNumber).toEqual("999")

});