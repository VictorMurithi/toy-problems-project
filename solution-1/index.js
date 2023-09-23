const readline = require('readline');
const generateGrade = require('./gradeGenerator'); // Import the generateGrade function from generateGrade.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input the student's marks: ", (studentInput) => {
  console.log(generateGrade(studentInput));
  rl.close();
});
