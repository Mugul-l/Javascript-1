let number=200;
console.log(number);    //200

let number2=new Number(5000);
console.log(number2);   //[Number: 500]

console.log(number.toString()); //200
console.log(number.toString().length); //3
console.log(number.toFixed(4)); // 200.0000  it will add the decimal values as'0' accn to the number given by you
const number3=3.2895;
console.log(number3.toPrecision(3));    //3.29

let number4=1000000;
console.log(number4.toLocaleString('en-IN'));   //10,00,000

//          MATHS
let num=234;
console.log(Math.sqrt(num));      //  15.297058540778355
console.log(Math.abs(-87));        //87
console.log(Math.pow(4,3));         //64
console.log(Math.min(2,4,6,1,8,9)); //1
console.log(Math.ceil(3.8));        //4
console.log(Math.floor(3.8));       //3
console.log(Math.random());     //random value in between 0-1 (decimal number)
console.log((Math.random()*10)+1);  // By multiplying 10 we can shift one digit to the left decimal point which wont be in between 0-1 but more then 1
//Many more...

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1) + min));





