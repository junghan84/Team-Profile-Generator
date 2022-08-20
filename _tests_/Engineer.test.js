const Engineer = require("../lib/Engineer");

test("Create an engineer object", () => {

    const engineer = new Engineer("Joy", 9999, "joy@gmail.com", "joyRo")

    expect(engineer.github).toEqual(expect.any(string))

});