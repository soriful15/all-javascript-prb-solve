function sumOfNumber(numbers){
    let sum =0;
    for(let i=0; i<numbers; i++){
        // let element = numbers[i];
        sum= sum+ i;
        console.log(i,sum)
    }
    return sum;
}
console.log(sumOfNumber(6));