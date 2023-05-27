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
      choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee Role','View All Roles','View All Employees', 'View All Departments', 'Exit']
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
      }else if(opChoice === 'Exit'){
        this.runExit();
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
    console.log("Running")
    db.query(`
    INSERT INTO department (name)
    VALUES("${addDepartment}");`,(err, result) =>  {
      console.log(`Added ${addDepartment} to Database`);
      this.runOpChoice()
    });
   })

  }

  async runAddRole(){
  let departments;
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
        type:'list',
        message:'What department is attached to the role?',
        name: 'attachedDepartment',
        choices:[],
        },

   ]).then(({addRole, addSalary, attachedDepartment}) => {
    console.log("Running");
    db.query(`
    SELECT * FROM role WHERE ${attachedDepartment};
    INSERT INTO role (title, salary, department_id);
    VALUES("${addRole}, ${addSalary}, ${attachedDepartment}");`,(err, result) =>  {
      console.log("Added Role to Database");
      this.runOpChoice()
    });
   })
  }

  async runAddEmployee(){
  let roles;
  await inquirer
  .prompt([
    {
    type:'input',
    message:'What is the first name of the employee?',
    name: 'addEmployeeFN',
    },
    {
      type:'input',
      message:'What is the last name of the employee?',
      name: 'addEmployeeLN',
    },
      {
        type:'list',
        message:`What is the employee's role?`,
        name: 'addEmployeeRole',
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
    
    this.runOpChoice()
   })

  }
  runViewAllRoles(){
  return db.query(`SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON role.department_id = department.id;`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    this.runOpChoice()
     });
  }
  runViewAllEmployees(){
  return db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id;', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    this.runOpChoice()
     });

  }
  runViewAllDepartments(){

  return db.query('SELECT * FROM department;', (err, result) => {
    // const table = result.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {})
    if (err) {
      console.log(err);
    }
    console.table(result);
    this.runOpChoice()
     });
  }
  runExit(){
    return process.exit(); 

  }



}
    
const run = new Questionaire();

run.runOpChoice();
