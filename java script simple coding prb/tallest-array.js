/* .......................tallest number.................... */
/* function maxArray(numbers){
    let largest =numbers[0];
    for(let i=0; i<numbers.length; i++){
        let index =i;
        let element= numbers[i];
     if(element>largest){
        largest = element;
     }

    }
    return largest;
}
let heights =[167,190,120,165,137];
let tallest =maxArray(heights);
console.log('tallest person shuvo', tallest); */

/* ............................ smallst number............................. */


function maxArray(numbers){
    let largest =numbers[0];
    for(let i=0; i< numbers.length; i++){
        // let index =i;
        let element= numbers[i];
     if(element<largest){
        largest = element;
     }

    }
    return largest;
}
let heights =[167,190,120,165,137];
let tallest =maxArray(heights);
console.log('tallest person shuvo', tallest);