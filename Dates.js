let myDate=new Date();         // Date is an object in JS
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());


let date = new Date(2024,3,20,10,30);   //We can manually enter the date and time like this.
console.log(date.toString());

let date2=new Date("01/01/2024");        // dd/mm/yy format
console.log(date2.toDateString());

//To know particular date/month/year/time etc
let date3=new Date();
console.log(date3.getDay());    //0 - means Sunday
console.log(date3.getDate());      //24 - Which is today's date
console.log(date3.getMonth());      // 11- Dec (zero-based index of the month)
//console.log(date3.getMonth()+1);     // 12 We can always write +1 to get the acutal number of the month
console.log(date3.getFullYear());   // 2023 - Currect year

//1.Write todays date,time,month and Y in deatil in a sentence
console.log(`Today's date is ${date3.getDate()} and month is ${date3.getMonth()+1} and the year is ${date3.getFullYear()}. [${date3.toDateString()}]`);



let anotherDate = new Date().toLocaleDateString('default', {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
});
console.log(anotherDate);
