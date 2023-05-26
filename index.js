const inquirer = require('inquirer');
const db = require('./db/connection');

class Questionaire{
  async runOpChoice(){  
   await inquirer
    .prompt([
      {
      type:'list',
      message:'Choose employee list operation:',
      name: 'opChoice',
      choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee Role','View All Roles','View All Employees', 'View All Departments']
      }
     ]).then(({opChoice}) => {
      console.log(opChoice);
      if (opChoice === 'Add Department'){
        this.runAddDepartment();
      }else if(opChoice === 'Add Role'){
        this.runAddRole();
      }else if(opChoice === 'Add Employee'){
        this.runAddEmployee();
      }else if(opChoice === 'Update Employee Role'){
        this.runUpdateEmployee();
      } else if(opChoice === 'View All Roles'){
        this.runViewAllRoles();
      } else if(opChoice === 'View All Employees'){
        this.runViewAllEmployees();
      } else if (opChoice === 'View All Departments'){
        this.runViewAllDepartments();
      }
    }).catch((error) => {
      console.log(error);
      console.log(" Something went wrong.");
    });

  }

  async runAddDepartment(){
    await inquirer
  .prompt([
    {
    type:'input',
    message:'What is the name of the department?',
    name: 'addDepartment',
    }
   ]).then(({addDepartment}) => {
    console.log("Running");
    db.query('INSERT INTO department (id, name);');
    db.query(`VALUES("${addDepartment}");`);
   })

  }

  async runAddRole(){
  
  await inquirer
  .prompt([
    {
    type:'input',
    message:'What is the name of the role?',
    name: 'addRole',
    },
    {
      type:'input',
      message:'What is the salary of the role?',
      name: 'addSalary',
      },
      {
        type:'input',
        message:'What department is attached to the role?',
        name: 'attachedDepartment',
        },

   ]).then(({addRole, addSalary, attachedDepartment}) => {
    console.log("Running");
    db.query(`
    INSERT INTO role (id, title, salary, name);
    VALUES("${addRole}, ${addSalary}, ${attachedDepartment}");`)
   })
  }

  async runAddEmployee(){
  await inquirer
  .prompt([
    {
    type:'input',
    message:'What is the first name of the employee?',
    name: 'addEmployeeFN',
    },
    {
      type:'input',
      message:'What is the Last name of the employee?',
      name: 'addEmployeeLN',
    },
      {
        type:'input',
        message:'What is the first name of the employee?',
        name: 'addEmployeeFN',
      },

    
   ]).then((response) => {
    console.log("Running");

   })

  }

  async runUpdateEmployee(){
  await inquirer
  .prompt([
    {
    type:'list',
    message:'What employee on the list will be update',
    name: 'updateEmployee',
    choices: []
    }
   ]).then((response) => {
    console.log("Running");

   })

  }
  runViewAllRoles(){
  return db.query('SELECT * FROM role;');

  }
  runViewAllEmployees(){
  return db.query('SELECT * FROM employee;');

  }
  runViewAllDepartments(){
  return db.query('SELECT * FROM department;');

  }

}
    
const run = new Questionaire();

run.runOpChoice();
