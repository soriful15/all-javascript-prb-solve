function radianToDegree(radian){
    let degree= radian*57.2958;
let element= degree.toFixed(2);
let element2= parseFloat(element);
    // return degree.toFixed(2);
    return element2
}
console.log(radianToDegree(10))