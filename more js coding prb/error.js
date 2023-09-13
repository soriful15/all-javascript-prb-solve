/* function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr); */






/* function add (num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'enter your number'
    }
   
    return num1+num2

}
let result =add(12,'45');
console.log(result) */


function add (num1,num2){
    if( typeof num1 == 'number' && typeof num2 !== 'number' ){
        return 'enter your number'
    }
   
    return num1+num2

}
let result =add(12,'45');
console.log(result)


/* function add (num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'enter your number'
    }
   
    return num1+num2

}
let result =add(false,45);
console.log(result) */



// ..............................nan
/* function add (num1,num2){
   
   
    return num1*num2

}
let result =add(12*45);
console.log(result) */


// jodi consol kori taile
/* function add (num1,num2){
   
   console.log(num1,num2)
    return num1*num2

}
let result =add(12*45);
console.log(result) */


// jodi count korte chai
/* function add (num1,num2){
   
    console.log(num1,num2)
     return num1*num2
 
 }
 let result =add(12,45);
 console.log(result) */