/* function factorial (number){
    let result = 1;
    let num =1;
    while(num<=number){
        num++
        result = result* num;
    }
    return result;
}
let num11= 7;
let allNumber = factorial(num11);
console.log(allNumber); */


// reserve way te

function factorial (number){
    let result = 1;
    let num =number;
    while(num >= 1){
        result = result* num;
        num--
      
    }
    return result;
}
let num11= 10;
let allNumber = factorial(num11);
console.log(allNumber);