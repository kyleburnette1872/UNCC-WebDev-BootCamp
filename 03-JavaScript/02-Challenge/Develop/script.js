// Assignment Code
/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria:
length of the password(8-128 characters); 
character types (lowercase/uppercase, numeric/special characters */

// Input should be validated and at least one character type should be selected)

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
