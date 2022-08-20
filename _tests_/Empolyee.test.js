const Employee = require("../lib/Employee")

test("Create an employee object", () =>{
    const employee = new Employee("Bob", 236, "bob@gmail.com");
    
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})