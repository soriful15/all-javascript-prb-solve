function sudMark(asol){
    let time=5;
    let rate =5/100;
    let munafa = asol*time*rate;
    let totalasol = asol + munafa;
    let totalSud = totalasol - asol;
    return totalSud;
}
console.log(sudMark(3000));