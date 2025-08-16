//      If Else : 
// let salary=  30000;
// if(salary >50000){
//     console.log(" Decent salary amount.");
// }
// else if(salary < 50000){
//     console.log(" Salary amount is vary less need to improve.");
// }
// else{
//      console.log("Salary not disclosed.");
// }

//      Switch Statement
let month= 2;
// switch (month) {
//     case 1: "Jan"
//         console.log("January");
//         break;
//     case 2: "Feb"
//         console.log("february");
//         break;

//     default:
//         break;
// }
// Falsy values
// false, 0, -0, null, undefined, "", BigInt 0n, NaN

//Truthy values
//'false', '0', " ", [], {}, function(){}

//how to check an empty array
const arr=[]
if(arr.length === 0){
    //console.log("Array is empty.");
}

// How to check an empty object?
const Obj={}
if(Object.keys(Obj).length === 0){      // Object.keys(obj) - returns an Array. So .length===0 can check the object is empty or not
    //console.log("The object is empty.");
}
//false == 0 -true
//false == '' -true
//0 == '' -true

//  Nullish coalishing Operator    ?? : null, unedifined ----------------------------------------------------------
// The nullish coalescing operator (??) is used to provide a default value when a variable is either:
// 1-null or 2-undefined

//Syntax:
//let result = value ?? defaultValue;

let user;
console.log(user ?? "Guest");       //Guest
 
let num1= 5 ?? 10   //5
let num2= null ?? 50   // 50
let num3= undefined ?? 'smruti' //smruti
let num4= null ?? 'Akhil' ?? 'smruti'   //Akhil
let check= (null || undefined) ?? "foo" //foo
// console.log(check);

// Difference from || (OR Operator)

// The || operator checks for falsy values (false, 0, "", null, undefined, NaN).
// The ?? operator checks only for null or undefined.

//  Ternary Operator -------------------------------
let  num=90;
num>=100 ? console.log("Yes"): console.log("Noo")

//Nullish coaleshing Operator and Ternary Operator are 2 different things

 