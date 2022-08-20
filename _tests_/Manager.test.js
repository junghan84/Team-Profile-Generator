const Manager = require("../lib/Mangager");

test("Create a manager object", () =>{
  
    const manager = new Manager("Joy", 9999, "joy@gmail.com", "9999")

    expect(manager.officeNumber).toEqual("9999")

});