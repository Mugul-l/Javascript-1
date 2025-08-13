console.log(AddOne(4))      // 5

function AddOne(num){
    return num+1;
}

//console.log(AddTwo(8))              // Will show error beacuse if we will write a fuction like 2nd way bcz JS cant access AddTwo before initialization. 

const AddTwo= function(num2){
    return num2+2;
}