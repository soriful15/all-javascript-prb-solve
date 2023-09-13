/* function isLeapYear(year){
    let remainder = year %4;
    if(remainder === 0){
         return true;
    }
    else{
        return false;
    }
}
let isMyLeapYear = isLeapYear(1996);
console.log('My Year', isMyLeapYear);

let isHerLeapYear = isLeapYear(1995);
console.log('Her Year', isHerLeapYear); */


//  aita hocche short cut taching
/* function isLeapYear(year){
    let remainder = year %4;
    if(remainder === 0){
         return true;
    }
        return false;
}
let isMyLeapYear = isLeapYear(1997);
console.log('My Year', isMyLeapYear) */;



// javascript er r akta niyom

function leapYear(year){
 if((0 == year % 4 ) && (0 != year% 100) || (0== year % 400)){
    return true;
 }
 else{
    return false;
 }
}
let isMyLeapYear = leapYear(1996);
console.log('My Year', isMyLeapYear);




/* function isLeapYear(year){
    const remainder = year %4;
    if(remainder === 0){
         console.log('Your year is leap year', year)
    }
    else{
        console.log('Your year is not leap year' ,year)
    }
}
isLeapYear(2014); */