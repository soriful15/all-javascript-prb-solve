var num1 =20;
var num2 ='30';
var total1 = parseInt(num2);
console.log(total1)
ki = typeof num1;
console.log(ki)

var total =  num1 + ' ' + num2;
console.log(total);




// kono number jodi string thake se ta k number a convert kore ki vabe jogfol mot  

var num23 = 25;
var num24= '26';
var mot = parseInt(num24);
var mot2 = num23 + mot;
console.log(mot2);


// gun vag er time a string thakle prb nai karon  gun vag time ora fol ta niye nei
var num23 = 25;
var num24= '26';
var mot2 = num23 * num24;
console.log(mot2);



// fixed and parsentFloat


var fix1 =0.1;
var fix2 = 0.2;
var sum =  fix1 * fix2;
console.log(sum.toFixed(6))
/* var folat = sum.toFixed(3);
var point = parseFloat(folat);
console.log(point); */




// kon number sob theke boro

/* var num31 =100;
var num32 = 200;
var num33 = 300;
if(num31 > num32 && num31 > num33){
    console.log('num31 boro')
}
else if(num32 > num33){
    console.log('num32 boro')
}
else{
    console.log('num33 boro')
} */






 var num31 =100;
var num32 = 200;
var num33 = 300;
if(num31 > num32){
    console.log('num31 boro')
}
else if(num31 > num33){
    console.log('num3 boro')
}
else{
    console.log('num33 boro')
} 



/* var number1 = 100;
var number2 = 200;
var number3 =300;
if( number1 > number2){
    if(number1 > number3){
        console.log(number1)
    }
    else{
        console.log(number3)
    }
}
else{
    if( number2 > number3){
        console.log(number2)

    }
    else{
        console.log(number3)
    }
}

 */




var number41 = 30;
if(number41 === 30){
    if(typeof number41 ==='string'){
        console.log( 'all is ok')
    }
    else{
        console.log('number41 is 30 but not string')
    }
}
else{
    console.log('dal may khuch kala hey')
}






// new akta code shikhlam
var number51 = [1,2,3,4,5,6,7,8,9];

for(var i =0; i< number51.length; i++){
    var element =number51[i];
    // console.log(element);
    if( element ==6){    
        console.log(element)
    }
   
}


// 2 number new jinis

var number51 = [1,2,3,4,5,6,7,8,9];
var newElement = [];
for(var i =0; i< number51.length; i++){
    var element =number51[i];
    if( element % 2 ==0){ 
        newElement.push(element) 
        
    }
   
}
console.log(newElement)






// length bahir korbo ki vabe

var friend = ['shuvo', 'siam','ayesha','istiack'];
for(var i = 0; i< friend.length; i++){
    friend3 = friend[i];
    console.log(friend3.length);
   
}
