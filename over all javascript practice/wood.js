function woodCalculator (chairQuantity, tableQuantity,bedQuantity){
    let perChairWood = 3;
    let perTableWood = 10;
    let perBedWood = 50;

    let chairWood = chairQuantity* perChairWood;
    let tableWood = tableQuantity * perTableWood;
    let bedWood = bedQuantity* perBedWood;
    // console.log(chairQuantity,tableQuantity,bedQuantity);
    let totalWood = chairWood+ tableWood+ bedWood;
    return totalWood;
}
let totalWood1=  woodCalculator(2,2,5);
console.log(totalWood1);