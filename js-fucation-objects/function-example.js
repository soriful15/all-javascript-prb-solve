function getAverage (assignment1, assignment2,assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total /3;
    return average;
}
const mark1 = 57;
const mark2 = 58;
const mark3 = 58;
const totalMark = getAverage(mark1,mark2,mark3);
console.log('totalmark :',totalMark);
