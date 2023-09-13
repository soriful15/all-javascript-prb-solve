/* function mindGame(positiveNumber){
let multiplicationNumber= positiveNumber*3;
let sumNumber=multiplicationNumber +10;
let divisionNumber= sumNumber /2;
let subtractionNumber= divisionNumber-5;
return subtractionNumber;



}
console.log(mindGame(50)); */



/* function evenOdd(string) {
    // let sum = '';
    for (let i = 0; i <= string.length; i++) {
        let stringElement= string[i];
        // sum = sum + stringElement;
        if(stringElement%2 == 0){
            return even;
        }
        else{
            return odd;
        }
    }

}
console.log(evenOdd('Phero')); */


/* function evenOdd(number) {
    if (number%2 == 0) {
        return true;

    }
    else{
        return false;
    }
}
console.log(evenOdd(2)); */


/* function evenOdd(string) {

    for (let i = 0; i < string.length; i++) {
        let stringElement= string[i];
        if(stringElement%2 !== 0){
            return odd;
        }
        else{
            return even;
        }
    }
}
console.log(evenOdd('Phero')); */



/* function isLGSeven(number) {
    let digit = 7;
    let difference = number - digit;
    if (difference < 7) {
        return difference;
    }
    else {
        let doubleInput = difference * 2;
        return doubleInput ;
    }

}
console.log(isLGSeven(5));  */








/* let number = [1,2,3,-6,-2,4,8,];
function findingBadData(numbers){
    let count= 0;
    for(let i=0; i<numbers.length;i++){
        let badData = numbers[i];
        if(badData<0){
            count++;
        }
        else if(badData>0) {
           continue;
        }
    }
    return count;
}
console.log(findingBadData(number)); */
/* 
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    let firstFriendGemsPower = 21;
    let secondFriendGemsPower = 32;
    let thirdFriendGemsPower = 43;
    let convertGemsToDiamond1 = firstFriendGems * firstFriendGemsPower;
    let convertGemsToDiamond2 = secondFriendGems * secondFriendGemsPower;
    let convertGemsToDiamond3 = thirdFriendGems * thirdFriendGemsPower;
    let totalDiamond = convertGemsToDiamond1 + convertGemsToDiamond2 + convertGemsToDiamond3;

    if(typeof firstFriendGems !=='number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !=='number'){
        return 'Please Enter Your Number'
    }
  else  if ( totalDiamond / 1000 >= 2) {
        let diamondRemains = totalDiamond - 2000;
        return diamondRemains;
    }
    return totalDiamond;
}
let firstGems = 100;
let secondGems = 5;
let thirdGems = 1;

console.log(gemsToDiamond(firstGems, secondGems, thirdGems)); */
 /*    if (totalDiamond < 1000 ) {
        return totalDiamond
    } */
/*    else  if (totalDiamond>=2000 && totalDiamond / 2000 >= 2) {
        let diamondRemains = totalDiamond - 2000;
        return diamondRemains;
    } */




function evenOdd(string){
if(typeof string !=='string'){
    return 'Please Enter Your String'
}
  else  if( string.length %2 !==0 ){
        return 'odd';
    }
    else{
        return 'even';    }
}
console.log(evenOdd('shuvo is a good boy'));
