function roomRent(rent,days){
    let totalCost=0;
    if(rent===500){
        let oneTo10DaysCost = rent*days;
        totalCost= oneTo10DaysCost;
        
    }
    else if(rent===300){
        let elevenTo20DaysCost= rent*days;
        totalCost=elevenTo20DaysCost;
    }
    else if(rent===100){
        let  twentyOneTo25DaysCost =rent*days;
        totalCost= twentyOneTo25DaysCost;
    }
    return totalCost;
}
let oneTo10Days= roomRent(500,10)
let elevenTo20Days= roomRent(300,10)
let twentyOneTo25Days= roomRent(100,5)
let overallCost= oneTo10Days+ elevenTo20Days +twentyOneTo25Days;
console.log(overallCost);
