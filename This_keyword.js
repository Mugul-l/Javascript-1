
// Global object in browser : Window object (if i will log -> console.log(this) it will give window in browser)

const obj= {
    name:"Smruti",
    age:"23",
    profession: function(){
        console.log(`${this.name} is a software developer.`);       // this refers to the current context in an object
        console.log(this);      //current context
        
    }
}

obj.profession();
console.log(this);      // {} - empty object
