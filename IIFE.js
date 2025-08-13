      //  ++++++++++  IIFE : Immidiately Invoked Function Expressions   +++++++++++
//       Originally, before ES6 let and const, JavaScript only had function scope.
//       An IIFE was a way to create a private scope so variables didn’t leak into the global scope.

// In short:
// An IIFE is like saying:
// “Here’s a small one-time-use function — run it now and don’t bother me later.”

// ----------------------------------------------------------------------------------------------
 
var message = "Hello"; // global
console.log(message);

(function() {
  var message = "Hello";
  console.log(message);
})();

console.log(message); // no ReferenceError


 //---------------------------------------------------------------------------------------------

(function Iife(){
    console.log("Database Connected.");
})();               //semicolon is must        //1st ()-wrap the function 2nd ()- IIFE / Execution
// To avoid the pollution of global scopes we can use IIFE.

// Arrow function IIFE  (UnNamed IIFE)
( () => {
    console.log("My name is Smruti. ");
}) ();          // IIFE doesnt know where to stop the execution so we need to put ';' afetr the execution to avoid errors

//  adding parameters and arguments 
//named IIFE
( (name) => {
    console.log(`My name is ${name}. `);        //My name is Akhil. 
}) ("Akhil");


