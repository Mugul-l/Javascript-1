//callback function -> it’s passed into another function.
//Higher Order Function-> A function inside another function.

function X(){  // Callback function because it is passed inside the Y function
    //console.log("I am Function 'X");
    
}

function Y(X){      //Higher oreder functrion cause another function X is called inside this function
    X();
    //console.log("I am function 'Y");
    
}

//Find the area of circles with the radius given

//const radius=[2,4,5,8]
// const Output= function(radius){
// const Area=[];
// for(const i of radius){
//     Area.push(Math.PI*(i*i))
// }
// return Area;
// }

// console.log(Output(radius));        //   [12.566370614359172,50.26548245743669,78.53981633974483,201.06192982974676]



 // Optimized Abstracted code

const radius=[3,4,7,9]

const Area=  function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius;
}
// const calculate = function(radius,logic){
//         const output=[];
//         for(const i of radius){
//             output.push(logic(i));
//         }
//         return output
// }

// console.log(calculate(radius,Area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));


// Map --------------------------------------------------
// It takes a function as an argument (a callback) and applies it to every element of the array, returning a new array.

// map() automatically loops through each radius value
// console.log(radius.map(Area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));


//WAP to calculate the sum of the numbers of an array in  js
let num=[2,4,6,8]
 function Sum(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum;
 }

 console.log(Sum(num));
 