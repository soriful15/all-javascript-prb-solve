function factorial(number){
    let result =1;
    for(let i=1;i<=number; i++){
         result =result * i;
         console.log(i,result);
    }
    return result;
}
let multiplucationNumber = factorial(8);
console.log(multiplucationNumber);