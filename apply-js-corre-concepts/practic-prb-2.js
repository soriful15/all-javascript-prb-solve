function findLeapYear(numbers){
    let table =[]
    for(i=0; i<=numbers.length; i++){
        let index = i;
        let element =numbers[index];
        if( element % 4 === 0){
            table.push(element);
            // console.log(element,'My leaper')
        }
   
    }
    return table;
}
let leapYearArray =[2023,2024,2025,2028,2030];
// findLeapYear(leapYearArray);
let table= findLeapYear(leapYearArray);
console.log(table)




 function leapYear(number11){
    let reminder = number11;
    if(reminder% 4=== 0){
        return true;
    }
    else{
        return false;
    }
   
}
let year = 2023;
console.log(leapYear(year ))
let year2 = 2024;
console.log(leapYear(year2))









function trafficSignal(color){

    if(  color === 'red'){
        console.log('its very dangerious')
    }
    else if(  color === 'yellow'){
        console.log('you are stop')
    }
    else if(  color === 'green'){
        console.log( 'its safty')
    }
    else{
        console.log('ami jani na ki korbo')
    }
}
//  trafficSignal('red'); 
//  trafficSignal('yellow'); 
 trafficSignal('green'); 