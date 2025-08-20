const arr=[1,3,2,9,5,7,6,8]

const res=arr.forEach(item=> item >5 );
//console.log(res);  // undefined - bcz foreach in js always returns undefined

//foreach --------------------------------------------------
//forEach always returns undefined.
//It’s used just to iterate over elements, not to create a new array or return values.

const result=arr.filter((item)=>item>5);
console.log(result);  //[6,7,8,9]

//other way: using foreach-------------------------------------

const newarr=[]
const res1= arr.forEach((item)=>{
    if(item>5)
    {
    newarr.push(item);
    }
});
console.log(newarr);
