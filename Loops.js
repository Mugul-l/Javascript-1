//  For loop
//Print num from 1-10?
// let num=10;
// for(let i=1;i<=num;i++){
//     console.log(i);
// }

//Print table from 1 - 10 ?
for(let i=1;i<=10;i++){
    //console.log(`For Table value ${i}`);
    {
        for(let j=1;j<=10;j++){
            //console.log(i+ " * "+ j +" = "+i*j);
        }
    }
}

//Print an arry using for Loop-
let Arr1=["Smruti","Akhil","Abhi","Sunanda","Rajat"]
console.log("My friends are: ")
for(let i=0;i<Arr1.length;i++){
    console.log( Arr1[i]);
}

// Break and Continue:

for(let i=1;i<=100;i++){
    if(i==4){
        //console.log("Ok Stop!");
        break;          //It stops the loop then and there where the condition matches
    }
    //console.log(i);       
}

for(let i=1;i<=100;i++){
    if(i==4){
        console.log("Ok Stop!");
        continue;          //It escapes the value where the condition matches, then contines...
    }
    console.log(i);       
}