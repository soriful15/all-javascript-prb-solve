
function farenHieght(number){
    let faren = ((number*9)/5)+32;
    return faren;
}
let num1 = farenHieght(104);
let num2 = num1.toFixed(2);
let num3 = parseFloat(num2);
console.log(num3);