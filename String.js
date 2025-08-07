// let str=("My name is"+varname+"and I am a student.")- old method
//New method
let name=" Smruti Pragyan Biswal ";
console.log(`My name is ${name}`); //This is called String 'interpolation'.

//We can declare string in another way as:
let str=new String("Anshuman");
console.log(str);    //[String: 'Anshuman']
console.log(str[2]);    // s
console.log(str.length);    //8
console.log(str.concat( " Biswal"));    //Anshuman Biswal
console.log(str.toUpperCase()); //ANSHUMAN
console.log(str.charAt(4)); // u
console.log(str.indexOf('h'));  //3
console.log(str.substring(0,5));    //Anshu
console.log(str.slice(-6,5));  //shu
console.log(name.trim());   //will remove the white spaces present in the whole string
console.log(name.trimStart()); 
console.log(name.trimEnd()); 

const url="https://smrutipragyan%15Biswal.com";
console.log(url.replace('%15','-'));   // https://smrutipragyan-Biswal.com ('%15' replaced with '-')
console.log(name.split(' '));
// Many more methods are there...

  console.log(str.__proto__); //  in console we can find the methods in detail by this syntax