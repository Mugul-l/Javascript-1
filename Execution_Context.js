// Execution Context =  The "box" where JS code runs, storing variables, functions, and scope for that specific time.

// JavaScript mainly has three kinds:

// 1- Global Execution Context (GEC)

// Created when the script first runs.

// this refers to the global object (window in browsers, global in Node.js).

// Only one global context exists at a time.

// 2- Function Execution Context (FEC)

// Created whenever a function is called.

// Each function call gets its own context.

// Can be many function contexts active (nested calls).

// 3- Eval Execution Context (rarely used)

// Created when code runs inside eval().

// ---------------------------------------------------------------------------

// Execution Context Phases

// Each execution context has two phases:

// A. Creation Phase

// JavaScript engine sets up memory before running the code.

// Creates Variable Environment

// var variables are hoisted and set to undefined

// Functions are hoisted with their definitions

// let & const are hoisted but kept in Temporal Dead Zone

// Creates Scope Chain (links to outer scopes)

// Sets the value of this

// B. Execution Phase

// Runs the code line-by-line.

// Assigns values to variables.

// Executes function calls.

//Example 
function a() {
  console.log("Inside A");
  b();
}
function b() {
  console.log("Inside B");
}
a();

// Call stack:

// 1-GEC created → runs a()

// 2-FEC for a pushed → calls b()

// 3-FEC for b pushed → finishes, popped

// 4-Return to FEC for a → finishes, popped

// 5-Back to GEC -

//6- Program finishes - GEC popped