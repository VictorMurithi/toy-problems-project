
  // readline allows us to get user input.
  const readline = require('readline');
  //imports the generated grade
  const getGrade = require("./gradeGenerator")
  // this creates the interface for the readline 
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //this one gathers the student marks
  rl.question("Please input the student's marks: ", getGrade());
  