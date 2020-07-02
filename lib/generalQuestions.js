//function for number validation
const validateString = function (string) {
  const isValid = string && string.length;
  const errorMessage = "Can`t be empty";

  if (!isValid) return errorMessage;

  return true;
};

//function for number validation
const validateNumber = (number) => {
  const regex = /^[0-9]\d*$/;
  const isNumber = number.match(regex);
  if (isNumber) {
    return true;
  } else {
    return "Please, enter a number!";
  }
};

//function for email validation
const validateEmail = (emailAddress) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const isEmail = emailAddress.match(re);
  if (isEmail) {
    return true;
  } else {
    return "Please,  enter a valid email address!";
  }
};

//array of questions
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
    validate: validateString,
  },
  {
    type: "input",
    message: "What is the ID for employee?",
    name: "id",
    validate: validateNumber,
  },
  {
    type: "input",
    message: "What is the EMAIL of employee?",
    name: "email",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "What is the GITHUB of employee?",
    name: "github",
    when: (values) => values.Employee == "Engineer",
    validate: validateString,
  },
  {
    type: "input",
    message: "What is the OFFICE NUMBER of employee?",
    name: "officeNumber",
    when: (values) => values.Employee == "Manager",
    validate: validateNumber,
  },
  {
    type: "input",
    message: "What is the SCHOOL of employee?",
    name: "school",
    when: (values) => values.Employee == "Intern",
    validate: validateString,
  },
  {
    type: "confirm",
    message: "Are you done?",
    name: "done",
  },
];

module.exports = generalQuestions;
