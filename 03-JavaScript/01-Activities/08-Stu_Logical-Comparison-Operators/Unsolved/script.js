var a = "50";
var b = 50;
var c = 125;
var d = c % b; // 2.5
var e = c / 2; // 62.5

var expression1 = (b === e); 
   
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b < e);
console.log(c != b);
console.log( d > 0);

console.log(d <= c);

// Use logical operators so all expressions below log to the console as true
console.log(!expression1 && !expression2);
console.log( !expression1 || expression2);
  
