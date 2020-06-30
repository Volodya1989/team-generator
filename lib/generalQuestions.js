
//array of general questions
const generalQuestions = [
  {
    type: "list",
    message: "What type of employee do you want to choose?",

    name: "Employee",
    choices: ["Engineer", "Manager", "Intern"],
  },
  {
    type: "input",
    message: "What is the NAME of employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the ID for employee?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the EMAIL of employee?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the GITHUB of employee?",
    name: "github",
    when: (values) => values.Employee == "Engineer",
  },
  {
    type: "input",
    message: "What is the OFFICE NUMBER of employee?",
    name: "officeNumber",
    when: (values) => values.Employee == "Manager",
  },
  {
    type: "input",
    message: "What is the SCHOOL of employee?",
    name: "school",
    when: (values) => values.Employee == "Intern",
  },
  {
    type: "confirm",
    message: "Are you done?",
    name: "done",
  },
];
module.exports = generalQuestions;
