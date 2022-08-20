const Intern = require("../lib/Intern");

test("Create an intern object", () =>{

    const intern = new Intern("Joy", 9999, "joy@gmail.com", "UniversityRobo")

    expect(intern.school).toEqual("UniversityRobo")

});