var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
//`"Canis Major"` is added as the first element of the `constellations` array and no elements are removed
//The correct answer:
constellations.unshift('Canis Major')
console.log(constellations)
//My answer 
//console.log(constellations);
//constellations.push('Canis Major');
//constellations.sort();
//This only moves Canis Major to the end.


//`"Venus"` is removed from the `planets` array.
//Correct answer
planets.pop()
console.log(planets)
//My answer
//var planetsSliced = planets.slice(0,5);
//console.log(planetsSliced);


//Arrays `constellations` and `planets` are joined to form a new array named `galaxy`.
//The arrays `constellations` and `planets` should not be altered.
//Correct answer:
var galaxy = constellations.concat(planets);
console.log(galaxy)
//My answer
//var galaxy = (constellations + planets);
//console.log(galaxy);
//which isn't an arry method.

//It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.
var polarisCapped = star.toUpperCase();
console.log(polarisCapped)
//My answer
//var polarisCapped = star.replace("polaris", "POLARIS");
//console.log(polarisCapped);