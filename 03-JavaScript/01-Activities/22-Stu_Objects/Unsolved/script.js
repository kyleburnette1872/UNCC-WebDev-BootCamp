//WRITE YOUR CODE BELOW
//The `customerOrder` object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.
var customerOrder = {
    drinkName: 'coffee',
    sugars: 3,
    isReady: true, //Uncaught SyntaxError: Unexpected identifier 'isReady' (at script.js:6:5)
};
//The drink name and the number of sugars is logged to the console.
console.log(customerOrder.drinkName),
console.log(customerOrder["sugars"]),

//The order is ready, the message `"Ready for pick-up"` logs.
if (customerOrder.isReady) {
} else { //The order is not ready, the message `"Still in order queue"` logs.
    console.log("Still In Queue")
}


