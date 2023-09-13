//  aita agher practice prb 2
 
 function odd_even(number){
    if(number%2 ===0){
        console.log('its even number')
    }
    else{
        console.log('odd number')
    }
    
}
odd_even(3); 


// new video er class
 
function isEven(number){
    let remainder = number % 2;
    // console.log(remainder);
    if( remainder ===0){
        console.log('true')
    }
    else if(remainder != 0){
        console.log('flase')
    }
    else{
        console.log('nothing')
    }
}
isEven(98);
isEven(117);




//  upor er niyom onujai kora jay but old version aita hocche new version

/* function isEven(number){
    let remainder = number % 2;
    if( remainder === 0){
        return true;
    }
  
    else{
        return false;
    }
}
let myNumberIsEven = isEven(98);
console.log(myNumberIsEven);

let herNumberIsOdd = isEven(117);
console.log(herNumberIsOdd); */





// practice revision

function isEven(number){
    let remainder = number %2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
let myNumberIsEven = isEven(98);
console.log(myNumberIsEven);


let herNumberIsOdd = isEven(117);
console.log(herNumberIsOdd);
