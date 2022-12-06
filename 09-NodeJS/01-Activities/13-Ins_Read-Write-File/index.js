// fs is a Node standard library package for reading and writing files
// Importing the fs module
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// First argument is the name of the file.
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]
fs.writeFile('log.txt', process.argv[2]\n, (err) => // "\n"creates a new line.
// If there is an erro, it will throw the error, otherwise it will print "Commit logged!"
  err ? console.error(err) : console.log('Success!')
);
