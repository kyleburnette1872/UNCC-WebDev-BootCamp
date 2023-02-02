var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var message = `Some say the world will end in 🔥, Some say in ice.\n
 From what I’ve tasted of desire, I hold with those who favor fire.\n
 But if it had to perish twice, I think I know enough of hate.\n
 To say that for destruction ice, Is also great, And would suffice.`;
var words = message.split(" ");
console.log(message);

// * It's done when the number of seconds left on the countdown is printed
// on the screen.
function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    // As long as the 'timeLeft' is greater than 1
    if (timeInterval > 1) {
      // Set the 'textContent' of 'timerEl to show the remaining seconds
      timerEl.textContent = timeLeft + "seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      // When 'timeLeft' is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + "second remaining";
      timeLeft--;
    } else {
      // Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
      timerEl.textContent = "";
      // Use 'clearInterval()' to stop the timer
      clearInterval(timeInterval);
      //call the 'displayMessage()' function
      displayMessage();
    }
  }, 1000);
}
// It's done when, after the countdown of 5 seconds ends,
// the words of the message appear on the screen, one word at a time.
// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
