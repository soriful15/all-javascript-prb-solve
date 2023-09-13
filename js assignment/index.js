/* 1.short Description :
If the parameter is string then  return please enter your Number.
If the parameter is a Number and if it is a positive number, 
then multiply the number by3, add 10 to the Result,
divide the result by2,and subtract 5 from the result and return it. */

function mindGame(positiveNumber) {
    if (typeof positiveNumber !== 'number') {
        return 'Please Enter Your Number'
    }
    else if (positiveNumber > 0) {
        let multiplicationNumber = positiveNumber * 3;
        let sumNumber = multiplicationNumber + 10;
        let divisionNumber = sumNumber / 2;
        let subtractionNumber = divisionNumber - 5;
        return subtractionNumber;

    }
}




/* 2.short Description :
If the parameter is a number ,it will return a string. 
If the parameter string is given then if the length
 if the string is even then it will return even  
 and if it is odd then it will return odd. */

function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'Please Enter Your String'
    }
    else if (string.length % 2 !== 0) {
        return 'odd';
    }
    else {
        return 'even';
    }
}




/* 3.short Description :
If the parameter is string then  return please enter your Number.
If the parameter returns seven minus the log of the number
and if the result is less than seven then it will return 
but if it is more than seven then multiply 2 with this number and return this. */

function isLGSeven(inputValue) {
    let digit = 7;
    let difference = inputValue - digit;
    if (typeof inputValue !== 'number') {
        return 'Please Enter Your Number'
    }

    else if (difference < 7) {
        return difference;
    }
    else if (difference >= 7) {
        let doubleInput = difference * 2;
        return doubleInput;
    }
}



/* 4.short Description :
if there is an array inside a parameter, if there is a number inside that array,
then if there is a neagative number inside the number ,then i will give the name 
of those things as beddata and these beddata should be counted and show as ReturnType.
 And if there are positive numbers inside that array ,then those i will give the
 name good data and if you return that good data it will show zero. */

function findingBadData(numbers) {
   
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        let badData = numbers[i];
       
        if(typeof badData =='string'){
            return 'Please Enter Your Array Number'
        }
    else if (badData < 0) {
            count++;
        }
        else if (badData > 0) {
            continue;
        }
    }
    return  count;
}




/* 5.short Description :
There will be three parameter inside the function , these three parameter will
 be the number of gemes of three friends.Each friend will have the power of Gem's power. 
 the number of each gem should be multiplied with power of that power . 
 Then after finding out the total number of diamonds by combining all the gems,
 if the total number of diamonds is a multiple of one thousand ,then teo thousand 
 should be deducted from the total diamond and who will return what is left.if it is
 not more than 1000 then it should be returned and shown. */

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    let firstFriendGemsPower = 21;
    let secondFriendGemsPower = 32;
    let thirdFriendGemsPower = 43;
    let convertGemsToDiamond1 = firstFriendGems * firstFriendGemsPower;
    let convertGemsToDiamond2 = secondFriendGems * secondFriendGemsPower;
    let convertGemsToDiamond3 = thirdFriendGems * thirdFriendGemsPower;
    let totalDiamond = convertGemsToDiamond1 + convertGemsToDiamond2 + convertGemsToDiamond3;
    if (typeof firstFriendGems !== 'number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !== 'number') {
        return 'Please Enter Your Number'
    }
    else if(totalDiamond<2000){
        return totalDiamond;
    }
    else if (totalDiamond>=2000 &&  totalDiamond / 1000 >= 2) {
        let diamondRemains = totalDiamond - 2000;
        return diamondRemains;
    }
    
} 