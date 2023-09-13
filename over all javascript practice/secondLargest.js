/* const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort()); */


/* function secondLargest(number){
    let number1 =number.sort();
    let secondNumber = number1[number1.length-1];
    return secondNumber;
}
let friends = [13,14,11,17,21,16,15,20];
console.log(secondLargest(friends)); */


let friends = [13,14,11,17,21,16,15,20];
function secondLargest(number){
    let number1= number.sort();
    let secondLargestNumber= number1[number1.length-2];
    return secondLargestNumber;
}
console.log(secondLargest(friends));