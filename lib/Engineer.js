// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email,github) {
    super(name, id, email);

    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  //????? how to override methods?????
  getRole() {
    return "Engineer";
  }
}

// const engineer = new Engineer("Ed", 3, "sds@gmail.com", "github");
// engineer.getRole()
// console.log(engineer.getRole())
module.exports=Engineer;


