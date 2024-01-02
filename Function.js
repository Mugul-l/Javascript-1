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
// function Add(num1,num2){
//  return num1+num2
// }
//  const result=Add(5,10)
//  console.log("The result is : ",result);
     
function LogedIn(username = "Smruti"){
    if(!username){
        console.log("You have to enter the username :(");
    }
    return `${username} just loggedIn!`;
}
 console.log(LogedIn());    //Smruti just Loggedin (If during parameter passing I will declare some value that will be treated as a default value)
 console.log(LogedIn("Akhil")); //Akhil just Loggedin (If argument is passed then it will be return)

