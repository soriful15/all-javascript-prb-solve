function examMark(number){
    if(number>=80){
        greatPoint= 'A+'
    }
    else if(number>=70){
        greatPoint = 'A';
    }
    else if(number>=60){
        greatPoint = 'A-';
    }
    else if(number>=50){
        greatPoint = 'B';
    }
    else if(number>=40){
        greatPoint = 'C';
    }
    else if(number>=70){
        greatPoint = 'D';
    }
    else{
        greatPoint= 'fail'
    }
    return greatPoint;
}
console.log(examMark(45));
