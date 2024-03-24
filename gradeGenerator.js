//This function controls how the grades are awarded as per the users input
function calculateMarks(marks) {
  if (marks > 79) {
    return "A";
  } //An A is 80+
  else if (marks >= 60 && marks <= 79) {
    return "B";
  } //A B is in the range of/and 79-60
  else if (marks >= 49 && marks <= 59) {
    return "C";
  } //A C is in the range of/and 59-49
  else if (marks >= 40 && marks <= 49) {
    return "D";
  } //A D is in the range of/and 49-40
  else if (marks < 40) {
    return "E";
  } //An E is anything below 40
}
function gradeMarks() {
  let marks = prompt("ENTER STUDENTS MARKS!");//This pushes a prompt for the user to input the marks
  if (marks >= 0 && marks <= 100) {
    const grade = calculateMarks(marks);
    console.log("The students grade is " + grade);
  } else {
    //If any other input which isn't 0-100 is feed the grade is not awarded
    console.log("FAILED!TRY AGAIN");
  }
}
//Does the function of grading the marks
gradeMarks();
