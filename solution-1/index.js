const readline = require('readline');
const generateGrade = require('./generateGrade'); // Import the generateGrade function from generateGrade.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input the student's marks: ", (studentInput) => {
  const marks = parseFloat(studentInput);

  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = generateGrade(marks);
    console.log(`Grade: ${grade}`);
  } else {
    console.log("Incorrect input. Value should be between 0 and 100.");
  }

  rl.close();
});
