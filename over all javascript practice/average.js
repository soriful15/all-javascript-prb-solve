
function getAverage(average){
    let sum=0;
    for(let i=0;i<average.length;i++){
        let element= average[i];
        sum= sum+element
    }
    let totalAverage= sum/average.length;
    return totalAverage;
}
let number=[1,2,3,4,5,6,7,8,9];
console.log(getAverage(number));