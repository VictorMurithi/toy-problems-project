const readline = require('readline');
const getSpeed = require('./speedDetector'); // Import the generateGrade function from generateGrade.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input the speed of the car: ", function(speedInput){
  //converts the input into a number 
  const speed = parseFloat(speedInput);
  //calls the function
  const points = getSpeed(speed);
    console.log ("demerit points :" ,points );
    return getSpeed;
});