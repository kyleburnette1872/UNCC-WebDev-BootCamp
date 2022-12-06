const a = process.argv[2];
const b = process.argv[2];

//Conditional statement
if (a === b) {
    console.log(true);
    } else {
    console.log(false);
    }

//A ternary operator
console.log(a == b ? true : false)

// Comparing variables 
console.log(a === b);

// Comparing argument values directly
console.log(process.argv[2] === process.argv[3]);

//Remeber to run code in terminal below using $ node index.js