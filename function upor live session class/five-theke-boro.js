/* let number = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]
function fiveOver(num) {
    let count = 0
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
    if (element >=5) {
        count++
    }
    else {
        continue;
    }
}
    return count
}
console.log(fiveOver(number)); */


var numbers = [10, -12, 89, 56, -83, 8, 90, -8]
function positive(number){
    let positiveNumber = 0;
    for(let i=0;i<number.length;i++){
        let element = number[i];
        if(element>0){
positiveNumber++
        }
        else{
            continue
        }
    }
    return positiveNumber
}
console.log(positive(numbers))