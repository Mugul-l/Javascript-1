// Stack Memory and Heap Memory

//Stack - Always makes copy [All the premitive datatypes]
//Heap - Takes reference  [All the non-premitive datatypes]

//Premitives
let name="Smruti";
let name2= name;
name2="SmrutipragyanBiswal";
console.log(name2);
console.log(name);       // no changes in the original name

//Non-premitives
let address={
    city:"jagatpur",
    Dist:"Cuttack",
    State:"Odisha",
    Country:"India"
}
let address2 = address;
address2.city="Clgsquare";
console.log(address);         // the original city in the object has been changed.