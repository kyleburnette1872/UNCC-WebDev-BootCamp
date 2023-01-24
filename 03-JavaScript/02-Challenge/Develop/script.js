// Assignment Code
/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */

var generateBtn = document.querySelector("#generate");
var chars = {
  uppers: "ABCDEFHGIJKLMNOPQRSTUVWXYZ",
  lowers: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  specials: "!@#$%^&*()_-=+[]{}",
}
var minlgth = 8;
var maxlgth = 12;
var passLgth = (minlgth >= maxlgth); {
}
  if (chars === passLgth) {
    console.log("Valid password length");
  } else ()
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
