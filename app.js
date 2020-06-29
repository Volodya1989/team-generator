const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//instances of objects
const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
const engineer = new Engineer(data.name, data.id, data.email, data.github);
const intern = new Intern(data.name, data.id, data.email, data.school);
//array of general questions
const generalQuestions = [
  {
    type: "list",
    message: "What is the NAME of employee?",
    name: "name",
  },
  {
    type: "list",
    message: "What is the ID for employee?",
    name: "id",
  },
  {
    type: "list",
    message: "What is the EMAIL of employee?",
    name: "email",
  },
];
//prompt questions
inquirer
  .prompt({
    type: "list",
    message: "What type of employee do you want to choose?",

    name: "Employee",
    choices: ["Engineer", "Manager", "Intern"],
  })
  .then(function (data) {
    //questions about Manager
    if (data.Employee === "Manager") {
      inquirer.prompt(generalQuestions, {
        type: "list",
        message: "What is the OFFICE NUMBER of employee?",
        name: "officeNumber",
      });
    }
    //questions about Engineer
    else if (data.Employee === "Engineer") {
      inquirer.prompt(generalQuestions, {
        type: "list",
        message: "What is the GITHUB of employee?",
        name: "github",
      });
    }
    //questions about Intern
    else if (data.Employee === "Intern") {
      inquirer.prompt(generalQuestions, {
        type: "list",
        message: "What is the SCHOOL of employee?",
        name: "school",
      });
    }
    // ????? probably here should go RENDER function 
  });

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
