/* function factorial(number){
    let result = 1;
    for (let i = number; i>=1; i--){
        result = result * i;
        console.log( i);

    }
    return result;
}
let fact1= 5
let fact= factorial(fact1);
console.log('factorial of',fact1, fact) */


//  upor ta reverse nicher ta na
function factorial(number){
    let result = 1;
    for (let i = 1; i<number; i++){
        result = result * i;
        console.log( i);

    }
    return result;
}
let fact1= 5
let fact= factorial(fact1);
console.log('factorial of',fact1, fact)