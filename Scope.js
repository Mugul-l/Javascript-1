 
function myFunc(){
    let nickname="piku"
    //console.log(`My name is Smruti`);
    function Function2(){
        let name="Smrutipragyan"
       // console.log(`My fullname is ${name}`);
        //console.log(nickname);
    }
    //console.log(name);        //error - cuz out of block
     Function2();
}
  myFunc();

  //--------------- Hoisting ------------------
//  1-
console.log(F1(10));
  function F1(add1){
    return add1 + 1;
  }
//     2-
//  console.log(F2(10)); //Cannot access 'F2' before initialization
 const F2 = function(add10){
    return add10 +10;
 }
 console.log(F2(10));