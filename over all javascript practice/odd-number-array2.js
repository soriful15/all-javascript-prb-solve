/* const allNumber=[24,22,55,65,66,44,55];
function getOddNumber(number){
    let table=[];
    for(let i=0;i<number.length; i++){
        let element =number[i];
        if(element%2 !==0){
            table.push(element);
           
        }
    }
    return table;
}
console.log(getOddNumber(allNumber)); */


/* const allNumber=[24,22,55,65,66,44,55];
function getOddNumber(number){
    let table=[];
    let sum =0;
    for(let i=0;i<number.length; i++){
        let element =number[i];
        if(element%2 !==0){
            table.push(element);
            sum = sum+ element;
            console.log(element);
        }
    }
    return sum;
}
console.log(getOddNumber(allNumber)); */


function getTotalOdd(number1){
    let sum= 0;
    for(let i=0; i<number1.length ; i++){
        let element1 = number1[i];
         sum = sum+ element1;
    }
    return sum
}


let allNumber=[24,22,55,65,66,44,55];
function getOddNumber(number){
    let table=[];
    for(let i=0;i<number.length; i++){
        let element =number[i];
        if(element%2 !==0){
            table.push(element);
           
        }
    }
    return table;
}
let allSum = getOddNumber(allNumber)
console.log(allSum);
let allSum2= getTotalOdd(allSum);
console.log(allSum2);
