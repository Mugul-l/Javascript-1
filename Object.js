//Object Literals
// let symbol= Symbol("smru123");
// let obj={
//     name:"Smruti",
//     age: 22,
//     email: "smruti987@gmail.com",
//     address: "Cuttack",
//     "occupation": "Engineer",
//     [symbol]:"smru321"   //we should declare symbol inside [] 
// }

// console.log(obj.email);
// //another way to access object
// console.log(obj["name"]);
// console.log(obj["occupation"]);
// //Symbol
//  console.log(obj[symbol]);

//  obj.age= 30;
//  console.log(obj.age);

//To Lock the changes 
//Object.freeze(obj)
// obj.address="Bhubaneswar";
// console.log(obj.address); //Cuttack -cuz the obj is freezed

// obj.newUser= function(){
//     console.log("My Fullname is Smruti Pragyan Biswal");
// };
// console.log(obj.newUser()); 

// obj.newUser2= function(){
//     console.log( `My age is ${this.age} .`);
// }
// console.log(obj.newUser2()); 

  //Singleton 
let User1= new Object() //singleton object
let User2={} //also an obj but not singleton

User2.name="Anshuman Biswal"
User2.age=22
User2.occupation="Engineer"
//console.log(User2);         //{ name: 'Anshuman Biswal', age: 22, occupation: 'Engineer' }

let User3 ={
    User:{
        Fullname:{
            Firstname:"Smruti",
            Lastname : "Biswal"     //nested function
        }

    }
}
//console.log(User3.User.Fullname);

//Add Object 
let obj1 = {"1":"a","2":"b"}
let obj2 = {"3":"c","4":"d"}

//let obj3 = {obj1,obj2}     //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//let obj3 = Object.assign({},obj1,obj2)      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//give {} so that it will first create an empty string then inside that empty string the rest strings will be added

let obj3= {...obj1,...obj2};    //Spread method like array
//console.log(obj3);

//Array of Objects

let obj4=[
    {
        name:"smruti",
        age:20
    },
    {
        name:"Akhil",
        age:20
    }
]

// console.log(Object.keys(obj1));        //[ '1', '2' ]
// console.log(Object.values(obj1));       //[ 'a', 'b' ]
// console.log(Object.entries(obj1));      //[ [ '1', 'a' ], [ '2', 'b' ] ]

// Object Destructuration
const Group={
    Player1:"Smruti",
    Player2: "Akhil",
    Player3:"XYZ"
}
//Group.Player2
//  1.
const {Player2}=Group
console.log(Player2);       //Akhil
// 2. We can also give a short name to player2 as:
const {Player2: name}=Group
console.log(name);      //Akhil

// Values of APIs comes in Json foramt like
// {
//     "name":"Smruti",
//     "Place":"Cuttack",   //In Json both key and values are written inside " "
//     "Job":"Engineer"
// }
