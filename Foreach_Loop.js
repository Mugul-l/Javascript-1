const coding=["Java","Python","C++","Ruby"]

coding.forEach(function (val) { //CALLBACK FUNCTION
  //  console.log(val);
    
})

// way 2 : 

coding.forEach((value) => {
   // console.log(value);
    
})

// way 3 : 

function PrintMe(item){
    //console.log(item);
}
coding.forEach(PrintMe)

// We can also access the index array etc using foreach loop

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
    
})

//Accessing the objects inside an Array

const arr =[
    {
        name:"Smruti",
        tittle:"Biswal"
    },
    {
        name:"Anshuman",
        tittle:"Biswal"
    },
    {
        name:"Bijay",
        tittle:"Rana"
    },

]

arr.forEach((item)=>{
    console.log(item.name, item.tittle);     //gives the fullname Smruti Biswal Anshuman Biswal Bijay Rana
    
})