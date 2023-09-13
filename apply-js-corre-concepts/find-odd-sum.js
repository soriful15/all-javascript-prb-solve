/* function getSum(numbers){
    let sum = 0;
    for(let i=0 ; i < numbers.length; i++){
        let index =i;
        // console.log(index);
        // let element= myNumbers[index]; aita and tar nicher ta same kotha e
        let element =numbers[index];
        sum = sum +element;
        console.log(index,element,sum);
    }
}
let myNumbers =[12,65,45,78,32,45,91];
getSum(myNumbers); */






// practice revision

function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
        
    }
    return sum;
}
let sumNumbers = [5, 7, 8, 10, 45, 30];
getSum(sumNumbers);
