function generateGrade(studentInput){ //function that grades the students 

// conditional statements to grade the studentMarks
    if (studentInput > 79){
        console.log("grade A");
        return "A";
    }
    else if(studentInput>=60 && studentInput<=79){
        console.log ("grade B");
        return "B";
    }
    else if (studentInput>=49 && studentInput<=59){
        console.log ("grade C");
        return "C";
    }
    else if (studentInput>=40 && studentInput<=49){
        console.log ("grade D");
        return "D" ;
    }
    else if(studentInput>=0 && studentInput<=39){
        console.log ("grade E");
        return "E" ;
    }
}
// readline allows us to get user input.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//thsi one gathers the student marks
rl.question("Please input the student's marks: ", function (userInput) {

const studentInput = userInput;

//this compares value from 0 to 100 and ensures its in the 
if(studentInput >= 0 && studentInput <= 100){
    const grade = generateGrade(studentInput);
    console.log("grade",grade);
}else
{
    console.log("Incorrect input.Value should be between 0 and 100")
}
//this one closes the readline interface
rl.close();
});
