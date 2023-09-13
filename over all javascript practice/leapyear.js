let leapYearArray = [2023, 2024, 2025, 2028, 2030];
function getLeapYear(number) {
    let table = [];
    for (let i = 0; i < number.length; i++) {
        if ((number[i] % 4 === 0) && (number[i] % 100 !== 0) ||( number[i] % 400==0 )) {
            table.push(number[i]);
        }
    }
    return table;
}
console.log(getLeapYear(leapYearArray));


/*  */

/* function leapYear(numbers){
    if((numbers % 4 == 0) && (numbers % 100 !== 0) ||( numbers % 400==0 ) ){
        return true
    }
    else{
        return false
    }
}
console.log(leapYear(19995))
 */