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
    validate: (employeeId) => {
      const regex = /^[0-9]\d*$/;
      const isNumber = employeeId.match(regex);
      if (isNumber) {
        return true;
      } else {
        return "Please, enter a number!";
      }
    },
  },
  {
    type: "input",
    message: "What is the EMAIL of employee?",
    name: "email",
    validate: (emailAddress) => {
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const isEmail = emailAddress.match(re);
      if (isEmail) {
        return true;
      } else {
        return "Please,  enter a valid email address!";
      }
    },
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
    validate: (officeId) => {
      const regex = /^[0-9]\d*$/;
      const isNumber = officeId.match(regex);
      if (isNumber) {
        return true;
      } else {
        return "Please, enter a number!";
      }
    },
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
// const validateNumber = (number) => {
//   const regex = /^[0-9]\d*$/;
//   const isNumber = number.match(regex);
//   if (isNumber) {
//     return true;
//   } else {
//     return "Please, enter a number!";
//   }
// };

module.exports = generalQuestions;
