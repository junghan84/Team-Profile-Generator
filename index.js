//6
const inquirer = require('inquirer');
fs = require("fs")

//Handles promts
 function(){
    inquirer
   .prompt([
    {
        type:"list",
        message:"which meal do you want to describe?",
        name:"meal",
        choice:[
            "Breakfast",
            "lunch",
            "dinner",
            "Done"
        ]
    }

   ]);

    