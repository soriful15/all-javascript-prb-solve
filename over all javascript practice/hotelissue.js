function hotelIssue(days) {
    let first10days = 500;
    let second11To20Days = 300;
    let third20DaysUp = 100;
    if (days <= 10) {
        let oneTo10Days = first10days * days;
        return oneTo10Days;
    }
    else if(days<=20){
        let first10DaysCost = first10days*10;
        let remaining11to20Days = days- 10;
        let second10daysCost = remaining11to20Days* second11To20Days;
        let second11To20daysCost= first10DaysCost+ second10daysCost;
        return second11To20daysCost;

    }
    else if(days>=20){
        let first10DaysCost = first10days*10;
        let second11To20DaysTotalcost =second11To20Days* 10;
        let remaining20daysUp= days-20;
        let third20DaysUpCost = remaining20daysUp* third20DaysUp;
        let overAllCost =first10DaysCost+ second11To20DaysTotalcost+third20DaysUpCost;
        return overAllCost;
    }

}
console.log(hotelIssue(5));
