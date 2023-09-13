
/* let heights = [167, 190, 120, 165, 137];
function largestNumber(number) {
let largest=number[0];
for(let i=0;i<number.length;i++){
    let numbers= number[i];
    if(numbers>largest){
        largest= numbers
    }
}
return largest;
}

console.log(largestNumber(heights)); */


/* let small = [167, 190, 120, 165, 137];
function smallestNumber(number) {
let smallest=number[0];
for(let i=0;i<number.length;i++){
    let numbers= number[i];
    if(numbers<smallest){
        smallest= numbers
    }
}
return smallest;
}

console.log(smallestNumber(small)); */




let allNumbers = [167, 190, 120, 165, 137];
function givenNumber(number){
    let numbers= number.sort();
    let numberLength= numbers[numbers.length-3];
    return numberLength;
}
console.log(givenNumber(allNumbers));