// aita hudai ami banaisi

function sum(a,b){
    console.log('apana k ami dilam ', a);
    console.log(b,'amk ai khane theke i tk reke baki tk den')
    var sum2 = a - b;
    console.log(sum2);
}
// sum(12,4);




// orginal code er khela suru

function add(number1,number2){
    console.log(number1,number2);
    var sum = number1+ number2;
    // console.log(sum);
    return sum;
}
// add(45,15);
/* var total = add(80,20);
console.log('total' ,total); */






function price(num1, num2){
    console.log(num1,num2);
    var total = num1 + num2;
    return total;
}
/* var totalPrice = price(20,30);
console.log('total tk', totalPrice) */






function bringSingara (money){
    console.log(money);
    var singgaraPrice = 10;
    var quantity = money/ singgaraPrice;
    return quantity;
}
 /* var singgra = bringSingara(40);
 console.log('koi ta singgra pabo', singgra); */







 
function bringSingara (money){
    // console.log(money);
    var singgaraPrice = 10;
    var quantity = money/ singgaraPrice;
    return quantity;
}
var myTaka = 150;
  var singgra = bringSingara(myTaka);
 console.log('koi ta singgra pabo', singgra);