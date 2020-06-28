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
  //????? how to override methods?????
  getRole() {
    super.getRole();
  }
}

// const engineer = new Engineer("Ed", 3, "sds@gmail.com", "github");
// engineer.getRole()
// console.log(engineer.getRole())


