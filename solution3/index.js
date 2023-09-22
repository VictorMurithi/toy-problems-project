const readline = require('readline');
const getSalary = require('./netSalaryCalculator'); // Import the generateGrade function from generateGrade.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(" Please input your salary : ", function(salaryInput){
  //converts the input into a number 
  const salary = parseFloat(salaryInput);
  //calls the function
  const netSalary = getSalary(salaryInput);
    console.log ("Netsalary :" , netSalary);
    return ;
});