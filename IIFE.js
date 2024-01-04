      //  ++++++++++  IIFE : Immidiately Invoked Function Expressions   +++++++++++
//  Named IIFE
(function Iife(){
    console.log("Database Connected.");
})();               //semicolon is must        //1st ()-wrap the function 2nd ()- IIFE
// To avoid the pollution of global scopes we can use IIFE.

// Arrow function IIFE  (UnNamed IIFE)
( () => {
    console.log("My name is Smruti. ");
}) ();

//  adding parameters and arguments
( (name) => {
    console.log(`My name is ${name}. `);        //My name is Akhil. 
}) ("Akhil");
