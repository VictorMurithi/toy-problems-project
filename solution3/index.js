const readline = require('readline');
const getSalary = require('./netSalaryCalculator'); // Import the generateGrade function from generateGrade.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(" Please input your salary : ", function(salaryInput){
  console.log("Net salary" ,getSalary(salaryInput))
    rl.close();
});