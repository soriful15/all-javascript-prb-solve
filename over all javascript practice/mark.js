/* function examMark(number){
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
console.log(examMark(45)); */


var inputName = 'shuvo';
var inputResult = 85;

if(inputResult >= 80 && inputResult <=100 ){
    console.log(inputName + ' '+ 'A+ paiso')
}
 if(inputResult >=70 && inputResult <=79){
    console.log(inputName + ' '+ 'A grade paiso')
}
else if(inputResult >=60 && inputResult <=69){
    console.log(inputName + ' '+ 'A- grade paiso')
}
else if(inputResult >=50 && inputResult <=59){
    console.log(inputName + ' '+ 'B grade paiso')
}
else if(inputResult >=40 && inputResult <=49){
    console.log(inputName + ' '+ 'C grade paiso')
}
else if(inputResult >=33 && inputResult <=39){
    console.log(inputName + ' '+ 'D grade paiso')
}
else if(inputResult >=00 && inputResult <=32){
    console.log(inputName + ' '+ 'F grade paiso')
}

