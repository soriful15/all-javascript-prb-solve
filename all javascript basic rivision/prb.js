/* function foo(token1,token2){
    function bar(token3,token4){
        let allToken2 = token3+token4;
        return allToken2;
    }
    console.log(bar(12,10));
    let allToken1 = token1+token2;
    return allToken1;
}
console.log(foo(10,20)); */





/* function average(number){
    let sum =0;
    for(let i =0; i< number.length; i++){
        let index = i;
        let aver = number[index];
        sum = sum+aver;
        console.log(index,aver,sum);
       

    }

return sum
}
let num=[1,2,3,4,5,6,7,8];

average(num); */





/* function oddNumber(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let index = i;
        let element = number[index];
        // sum = sum+aver;
        if (element % 2 != 0) {
            sum = sum + element;
           
        }




    }
    console.log(sum);
    return sum;
}
let number = [1, 2, 3, 4, 5, 6, 7, 8];

oddNumber(number); */


/* function factorial(numbers){
    let result = 1;
    for(let i= 1; i<= numbers; i++){
        result =result * i;
    }
    return result;
}
let multi2 =factorial(5);
console.log(multi2); */



/* function factorial1 (number){
    let gun1 =1;
    for(let i=number; i>=1; i--){
        gun1 = gun1*1;
    }
    return gun1;
}
console.log(factorial(10)); */





/* 
function average(number){
    let sum =0;
    for(let i =0; i< number.length; i++){
        let index = i;
        let aver = number[index];
        sum = sum+aver;
        console.log(sum);
       

    }

return sum
}
function oddNumber(number){
    let table=[];
    for(let i=0; i<number.length; i++){
        let index = i;
        let aver = number[index];
        if(aver%2 !==0){
            table.push(aver);
        }
    }
    return table;
} 


let num=[1,2,3,4,5,6,7,8];
let table= oddNumber(num);
console.log(table);
let odd2= average(table);
console.log('odd hua',odd2); */





/* function oddNumber(number){
    let table=[];
    let sum =0;
    for(let i=0; i<number.length; i++){
        let index = i;
        let aver = number[index];
        if(aver%2 !==0){
            table.push(aver);
            
            sum= sum +aver;
        }
    }
    console.log(table,sum);
    return table;
} 


let num=[1,11,5,4,5,6,7,8];
oddNumber(num); */




function oddNumber(number){
    let table=[];

    for(let i=0; i<number.length; i++){
        let index = i;
        let aver = number[index];
        if(aver%4 ==0){
            table.push(aver);
            
        }
    }
    // console.log(table);
    return table;
} 


let num=[2023,2024,2025,2026];
// oddNumber(num);
let all = oddNumber(num);
console.log(all);







function leapYear(year){
    if(year % 4 === 0 && year%100 !==0 || year%400 ===0){
        return true;
    }
    else{
        return false;
    }
}
let number= 1996;
console.log(leapYear(number));






function bijor(number11){
    if(number11 % 2 ==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(bijor(98));