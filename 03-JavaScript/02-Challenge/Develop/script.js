// Assignment Code
/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria:
length of the password(8-128 characters); 
character types (lowercase/uppercase, numeric/special characters */

// Array of options for computer to pick from
var options = {
  uppercase: [`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`],
  lowercase: [`a b c d e f g h i j k l m n o p q r s t u v w x y z`],
  numeric: [`0,1,2,3,4,5,6,7,8,9,0`],
  characters: [`!@#$ %^&*(){}[]=<>/.`],
};

// Get random index from array of options
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  var randomSelect = "";
  for (var i = 0; i < length; i++) {
    randomSelect += Math.trunc(Math.random() * options.lowercase.length);
  }
  return randomSelect;
  console.log(randomSelect);

  /*
var generatePassword = function () {
  var promptWindow = prompt(
    "Select the length of password between 8-128 characters"
  );
  if (promptWindow >= 8 && promptWindow <= 128) {
    confirm(`You selected ${promptWindow}`);
  } else if (promptWindow === "") {
    promptWindow.addEventListener("click", generatePassword);
  } else {
    alert("Invalid number");
    return promptWindow;
  }

  if (confirm("Use lowercase letters?") === true) {
    confirm("Okay!");
  } else {
    alert("No lowercase added.");
  }

  if (confirm("Use uppercase letters?") === true) {
    confirm("Okay!");
  } else {
    alert("No uppercase added.");
  }

  if (confirm("Use numeric/special characters?") === true) {
    confirm("Okay!");
  } else {
    alert("No numeric/special characters added.");
  }

  console.log(promptWindow);

  return "thank you";
};
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

*/
});
