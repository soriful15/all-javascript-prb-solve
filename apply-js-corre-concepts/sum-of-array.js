/*  let sum =0;
 for(let i=1; i<=7; i++){
    sum= sum +i;
    console.log(i,sum);
 } */

//  upor er jinis ta function hisabe dekhbo
function sumOfNumber(numbers){
    let sum =0;
    for(let i=1; i<=numbers; i++){
       sum= sum +i;
       console.log(i,sum);
    }
    return sum;
}

let allNumber =5;
let number = sumOfNumber(allNumber);
console.log(number)