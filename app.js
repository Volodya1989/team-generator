//Volodymyr Petrytsya  07/01/20

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generalQuestions = require("./lib/generalQuestions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//empty array is declared for future generated objects
const employees = [];

//instances of objects declared
let manager;
let engineer;
let intern;

//function that  prompt user with questions
const askQuestions = function () {
  inquirer.prompt(generalQuestions).then(completeQuestionary);
};
//function that redirect users input into appropriate team roles
const completeQuestionary = function (values) {
  let employee;
  // info about Manager
  if (values.Employee == "Manager") {
    const { name, id, email, officeNumber } = values;
    employee = new Manager(name, id, email, officeNumber);
  }
  //info about Engineer
  else if (values.Employee == "Engineer") {
    const { name, id, email, github } = values;
    employee = new Engineer(name, id, email, github);
  }
  //info about Intern
  else if (values.Employee == "Intern") {
    const { name, id, email, school } = values;
    employee = new Intern(name, id, email, school);
  }

  employees.push(employee);
  //if user wants to add more team members --> then questions are repeated once more
  if (!values.done) return askQuestions();

  // write to a file
  fs.writeFileSync(outputPath, render(employees), "utf8");
};

//prompt questions
askQuestions();
