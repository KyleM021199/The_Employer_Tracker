
const inquirer = require('inquirer');

    
class Questionaire{
  runOpChoice(){  
    return inquirer
    .prompt([
      {
      type:'list',
      message:'Choose employee list operation:',
      name: 'opChoice',
      choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee Role','View All Roles','View All Employees', 'View All Departments']
      }
     ]) .then((respond) => {
      if (respond === 'Add Department'){
        this.runAddDepartment();
      }else if(respond === 'Add Role'){
        this.runAddRole();
      }else if(respond === 'Add Employee'){
        this.runAddRole();
      }else if(respond === 'Update Employee Role'){
        this.runUpdateEmployee();
      } else if(respond === 'View All Roles'){
        this.runViewAllRoles();
      } else if(respond === 'View All Employees'){
        this.runViewAllEmployees();
      } else if (respond === 'View All Departments'){
        this.runViewAllDepartments();
      }
    }).catch((error) => {
      console.log(error);
      console.log(" Something went wrong.");
    });

}

runAddDepartment(){


}

runAddRole(){


}

runAddEmployee(){


}

runUpdateEmployee(){


}
runViewAllRoles(){


}
runViewAllEmployees(){


}
runViewAllDepartments(){


}

}
    
const run = new Questionaire();

run.runOpChoice();
