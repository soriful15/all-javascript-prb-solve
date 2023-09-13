/* function factorial(number){
    let result = 1;
    for (let i = number; i>=1; i--){
        result = result * i;
        // console.log( i);

    }
    return result;
}
let fact= factorial(7);
console.log(fact) */

// r ak vabe kora jay
function factorial(number){
    let result = 1;
    for (let i = number; i>=1; i--){
        result = result * i;
        console.log( i);

    }
    return result;
}
let fact1= 5
let fact= factorial(fact1);
console.log('factorial of',fact1, fact)