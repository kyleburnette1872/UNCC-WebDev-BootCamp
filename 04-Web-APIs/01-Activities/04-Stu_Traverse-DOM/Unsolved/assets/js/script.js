// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px"; // changed index from (2] to [0]
headerDiv.children[0].style.color = "white"; //add .children[0] after headerDiv
