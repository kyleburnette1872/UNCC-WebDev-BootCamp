// WRITE YOUR CODE HERE
//Create a list of student names and be able to add and rename names.
var studentName = ["Carlos", "Korenza", "Kylah","Kyle"];

console.log("Welcome Student " + studentName[1] + " To Piscataway!");

//The first element in the array is replaced with the name of a new student.
studentName[1] = "Shirley"; //This did not replace Korenza's name. Why?

//An `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.
if (studentName[1] === "Shirley") {
    console.log( "New student " + studentName[1] + " is in class!");
} else {
    console.log("Korenza is in class!");
}