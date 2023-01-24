//WRITE YOUR CODE BELOW
// create names of five classmates are stored in a single variable named `students`.
var students = ["Michael", "Ralph", "Bobby", "Ronnie", "Jonny"];

//total number of elements in the `students` array is logged to the console.
console.log(students.length);

//using a `for` loop, the greeting "Great to see you, CLASSMATE_NAME!"
//logs to the console for each classmate's name in the `students` array.
for (var i = 0; i < students.length; i++) {
  console.log("Great to see you," + students[i] + "!");
}
