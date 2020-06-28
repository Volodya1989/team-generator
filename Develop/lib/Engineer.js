// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(name, id, email);
  }
  getGitHub() {
    return this.github;
  }
}

//needs to add getRole() func !!!!!


// const rectangle = new Rectangle(12, 9);
// rectangle.printInfo();
