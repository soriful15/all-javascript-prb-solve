/* let allNumber = [ -1, 4, 5, 12,];
function negativeToPositive(number) {
    let positive = []
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element >= 0) {
            positive.push(element)
        }
        else {
            continue;
        }
    }
    return positive;
}
console.log(negativeToPositive(allNumber)); */




let allNumber = [1,2,3,-6,-2,4,8,]
function negativeToPositive(number){
    let positive= [];
    for(let i=0; i<number.length;i++){
        let element = number[i];
        if(element>=0){
            positive.push(element)
        }
        else{
           continue;
        }
    }
    return positive;
}
console.log(negativeToPositive(allNumber));