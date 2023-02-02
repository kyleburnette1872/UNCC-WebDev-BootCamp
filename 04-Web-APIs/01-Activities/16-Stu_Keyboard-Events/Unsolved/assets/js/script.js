// As a developer, I want to display the value and code of a pressed key.

/* * It's done when, if a key is pressed down, the value of
 the key and the key's code is displayed. `KEYDOWN Event`
  should also be displayed to indicate the type of event. */

// * It's done when, if the key is released, `KEYUP Event` is displayed.
function keydownAction(event) {
  // TODO: Complete keydown function

// Grab the values for the key and code
var keyPress = event.key;
var codePress = event.code;

// Update the webpage with values
document.querySelector("#key").innerHTML = keyPress;
document.querySelector("#code").innerHTML = codePress;
document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

