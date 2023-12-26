// let arr=[4,6,8,10];
// console.log(arr[3]);    //10

// //we can also declare array as-
// let arr2=new Array(2,3,5,7);
// console.log(arr2);  //[ 2, 3, 5, 7 ]

// //Methods of Arrays
//  const arr3= arr.join();
// console.log(arr3);  //4,6,8,10  
// console.log(typeof arr3);   //(String type)

// const arr4=[2,3,4,5,6];
// arr4.push(7);
// console.log(arr4);
// arr4.pop();
// console.log(arr4);
// arr4.unshift(1);
// console.log(arr4);
// arr4.shift();
// console.log(arr4);
// console.log(arr4.includes(5));
// console.log(arr4.indexOf(9));
 
//Slice & Splice
// let newArr=[1,2,3,4,5];
// console.log("Smru",newArr);

// let newArr1=newArr.slice(0,3); //excluding 3 -means 3rd index
// console.log(newArr1);

// let newArr2=newArr.splice(1,3); //starting from 1st index to 3 element
// console.log("C",newArr2);

let Arr = ["smruti","Anshuman"];
let Arr2 = ["Siksha","Shubh","Bhakti"];
// console.log(Arr.push(Arr2));
// console.log(Arr.concat(Arr2));

//Spread Operator - While concat() concatinates only one var to another at the same time by using spread operator we can add more than one var to another by adding '...' before the var name inside [].
 let newArr=[...Arr,...Arr2];
 console.log(newArr);   //[ 'smruti', 'Anshuman', 'Siksha', 'Shubh', 'Bhakti' ]

//Flat
let Array_new=[1,2,3,[4,5],[6,[7,8]],9];
console.log(Array_new.flat(Infinity));          //[1,2,3,4,5,6,7,8,9]

let arr_xy="Smruti";
console.log(Array.isArray(arr_xy));
console.log(Array.from(arr_xy));
console.log(Array.from({name: arr_xy}))     //important -[] always gives an empty string if we will not define we need the value of key string or ...

let name1="Suman"
let name2="Shailaja"
let name3="Subhashree"
let name4="Sunanda"
console.log(Array.of(name1,name2,name3,name4));     //[ 'Suman', 'Shailaja', 'Subhashree', 'Sunanda' ]






