//Javascript is a Dynamically typed language cuz we need not to assign the type
// of the var during the declaration but the interpreter itself assigns the type to 
//the var during the runtime accn to the value assigned to the var.

//Premitive datatypes
//7 types- Number,Null,Boolean,BigInt,String,Symbol,Undefind

//Symbol
const num1=Symbol('123')
const num2=Symbol('123')
//BigInt
let num=4567893216547n;
console.log(typeof num);
//console.log(num1===num2);   //false 
//cuz symbol assigns diff values to the variables even if the the value entered by you is same

//Reference datatypes(Non-premitive)
// Arrays,Objects,Functions etc.

 //Arrays
 let arr=["smruti","Akil","shailaja"];
 console.log(arr);

 //Object
 const mark={
    Maths:90,
    English:70,
    Science:80
 };
 console.log(mark);

 //Function
 const myFunc=function(){
 console.log(a+b);
 }
 console.log(typeof myFunc);  //Function
 

 //Memory
 //Premitive-Stack memory & Non-premitive/reference:Heap memory