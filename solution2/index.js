const readline = require('readline');
const getSpeed = require('./speedDetector'); // Import the generateGrade function from generateGrade.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input the speed of the car: ", function(speedInput){
  console.log(getSpeed(speedInput));
  rl.close();
});