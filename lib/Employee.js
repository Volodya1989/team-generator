// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    // this.role=role;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  //??? how to pass this function so that current user's role is returned???
  getRole() {
    return "Employee";
  }
  
}
module.exports=Employee;
