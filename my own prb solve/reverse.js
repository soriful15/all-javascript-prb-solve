/* function reverseString(text) {
    let rev = ' ';
    for (let i = text.length-1; i >=0; i--) {
        let index = i;
        let element = text[index];
        rev= rev+element;
        console.log(element,rev);
    }
    return rev;
}
let myString = 'i am a good boy';
let reversed = reverseString(myString); */

function reverseString(text) {
    let words =text.split('')
    let table =[];
    for (let i = words.length-1; i >=0; i--) {
        let index = i;
        let element = text[index];
       table.push(element);
      
    }
let tJion=table.join('')
return tJion;
}
let myString = 'i am a good boy';
let reversed = reverseString(myString);
console.log(reversed);