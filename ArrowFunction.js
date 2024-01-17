let company={
    Employee_name:"Smrutipragyan",
    salary: 30000,

    welcome_msg: function(){
        //console.log(`${this.Employee_name}! Welcome to the Company.`);
    }
}
company.welcome_msg()       //Smrutipragyan! Welcome to the Company.

company.Employee_name="Anshuman";
company.welcome_msg()       //Anshuman! Welcome to the Company.

//We can use 'this' keyword inside an object . Inside functions we can't use

        const Myfunction= function(){
             name:"Smruti"
             //console.log(this.name);
        }
        Myfunction()     //undefined

//      ------  Arrow Function  ------------
let Function = ()   => {
    myName: "Smruu"
    //console.log(this.myName);
}
Function()      //undefined

//Other Techniques to write arrow functions
//  1-
let func1= (num1, num2) =>{
    return num1+num2;       //(explicit return)we have to write the return statement if using { }
}
 //console.log(func1(8,2));
 // 2-
 let func2=(num3,num4)=> (num3+num4)    //(Implicit return)It's not needed to write return if not using { }
 //console.log(func2(5,10));

 //return object
 let returnObj= () => ({name:"Akhil"})
  console.log(returnObj());     //{ name: 'Akhil' }
  
