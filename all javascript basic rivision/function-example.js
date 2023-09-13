function average (assignment1, assignment2,assignment3){
    let totalMark = assignment1 + assignment2 + assignment3;
    totalAverage = totalMark/3;
    return totalAverage;
}
let mark1 =57;
let mark2 = 58;
let mark3 = 58;
let allMark = average(mark1, mark2,mark3);
console.log(allMark);