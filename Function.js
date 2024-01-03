// function Add(num1,num2){
// console.log(num1+num2);
// }
// Add(10,40)

//WAP to print the addition of two numbers (if the numbers are of 'Number') type then only the addition will happen else not
// function AddNumbers(number1,number2){
//     if(typeof number1 == typeof number2){
//         console.log(number1+number2);
//     }
//     else{
//         console.log("Addition can not be executed.");
//     }    
// }
// AddNumbers(8,2)            // 10
// AddNumbers(8,"2")       // Addition can not be executed. (Cuz the 2nd num is a string )

//Using return statement
function Add(num1,num2){
 return num1+num2
}
//  const result=Add(5,10)
//  console.log("The result is : ",result);
     
function LogedIn(username = "Smruti"){
    if(!username){
        //console.log("You have to enter the username :(");
    }
    return `${username} just loggedIn!`;
}
//  console.log(LogedIn());    //Smruti just Loggedin (If during parameter passing I will declare some value that will be treated as a default value)
//  console.log(LogedIn("Akhil")); //Akhil just Loggedin (If argument is passed then it will be return)

//----------------------------------
// Rest and Spread

function CalculatePrice(...num1){
    return num1
}
// console.log(CalculatePrice(200, 400, 600, 800)); //[ 200, 400, 600, 800 ]
//-------------------------
function CalculatePriceOne(num1,num2, ...num){
    return num
}
// console.log(CalculatePriceOne(200, 400, 600, 800));     //[600, 800]

//Pass object to a function

const myObject = {
    name:"Smruti",
    age: 22
}
function ObjFunction(myObject11){   //parameter can be anything can be diff from obj name / same as obj name
    //console.log(`My name is ${myObject11.name} and my age is ${myObject11.age}`);   //while giving variable name we have to write the parameter passed inside function then '.var' name
}
ObjFunction(myObject)   //Here while calling the func we have to pass the name of the obj as an argument mandatorily
 //console.log(ObjFunction(myObject))
//Change val
 ObjFunction({
    name:"Akhil",
    age: 22
 })                     //My name is Akhil and my age is 22

 //Passing Array Inside a function
 let array=[10,20,30,40]
     1.
 function ArrayFunc(num){
    return num[2]
 }
//  console.log(ArrayFunc(array));
//     2.
 function ArrayFunc1(num1){
    return num1[2]
 }
 console.log(ArrayFunc1([100,200,300,400,500]))

 