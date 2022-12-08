var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage() {
   console.log("Congrats! " + chosenPet.Lulu + ", a great dog, is available for adoption!"); // take out Lulu from "chosenPet.Lulu"
   apptMessage();// should be shelter.apptMessage
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage; //should be a () after apptMessage
}

if (dogs.includes(chosenPet)) { // should be shelter.dogs.includes
  dogMessage();
} else if (cats.includes(chosenPet)) { //should be "shelter.cats.includes"
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter[0] + ". or our featured cat, " + cat.shelter[1]);
}// The above line should be  "shelter.dogs[0]" and "shelter.cats[1]"

  
