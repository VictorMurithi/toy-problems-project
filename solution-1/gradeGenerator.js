function generateGrade(studentInput){ //function that grades the students 
  
  //this provides conditions for the values between 0 and 100 and grades them accordingly
  if(!isNaN(studentInput) && studentInput >= 0 && studentInput <= 100){
  // conditional statements to grade the studentMarks
      if (studentInput > 79){
          return "A";
      }
      else if(studentInput>=60 && studentInput<=79){
          return "B";
      }
      else if (studentInput>=49 && studentInput<=59){
          return "C";
      }
      else if (studentInput>=40 && studentInput<=49){
          return "D" ;
      }
      else if(studentInput>=0 && studentInput<=39){
          return "E" ;
      }
    }else{
        console.log("Incorrect input. Value should be between 0 and 100");
  }
}

module.exports = generateGrade;
  
