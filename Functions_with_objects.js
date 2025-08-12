const names = {
    fname:"Smruti",
    mname:"Pragyan",
    lname:"Biswal"
};

let func = function Printfunc(){
    console.log(`My name is ${names.fname}`);    
}
// console.log(func());

//Another way :

function PrintNames(Allnames){
        console.log(`My name is ${Allnames.fname} ${Allnames.lname}`);    

    }
// console.log(PrintNames(names));         
    

//Array of objects 

let arr1=[100,200,500]
function arr(any_arr){
    return any_arr[2]
}
console.log(arr(arr1));     //500

// OR

console.log(arr([100,600,800,500,400]));        //800  directly passing the array while printing 
 