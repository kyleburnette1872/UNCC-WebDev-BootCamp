// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
//"True ✅ True ✅" is logged when both `expression1` and `expression2` are true.
if (expression1 && expression2) {
    console.log("True ✅ True ✅");
  } 
  //"True ✅ False ❌" is logged when `expression1` is true.
  else if (expression1) {
    console.log("True ✅ False ❌");
  } //"False ❌ True ✅" is logged when `expression2` is true. 
  else if (expression2) {
    console.log("False ❌ True ✅");
  } //"False ❌ False ❌" is logged when both `expression1` and `expression2` are false.
  else {
    console.log("False ❌ False ❌");
  }