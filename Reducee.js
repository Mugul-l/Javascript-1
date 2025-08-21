//reduce() is a higher-order function (it takes another function as input).
//It processes an array element by element and combines them into a single value.

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,        //formula 
  initialValue,
);
  // accumulator (acc) → remembers the running result.
  // currentValue (curr) → current element from the array.
  //initialValue → starting point for the accumulator.



// const sum= array.reduce((acc,curr)=> acc+curr, 0);  


// console.log(sumWithInitial);  // Expected output: 10
// console.log(sum);  // Expected output: 10

const shoopingCart=[
    {name:"book",price:200},
    {name:"pen",price:20},
    {name:"duster",price:50},
    {name:"colours",price:100},
    {name:"Notebooks",price:150}
];
let total= shoopingCart.reduce((acc,item)=>item.price+acc,0);
console.log(total);
