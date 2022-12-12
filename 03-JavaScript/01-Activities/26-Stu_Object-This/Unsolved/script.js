// TODO: What does 'this' refer to?
console.log(this); // Refers to the global object. In this case the Window

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); // Refers to the global object (window) as well
   }

// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); // Refers to the object "child"
   }
};

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15) // Refers to the object original object investor
    }
   }   
};

// TODO: After commenting, check your results!
helloThis(); // calls the function "helloThis"

// TODO: After commenting, check your results!
child.ageTenYears(); // calls the object method (which is a function) ageTenYears for results.
investor.investment.investmentGrowth(); // 
