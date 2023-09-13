const shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
// console.log(shoppingCart);

//1. aita diye to je kono keys er vitor value gula change kore jay
/* shoppingCart.pen=2;
console.log(shoppingCart); */

//2. r ak vabe ache je gula diye value gula name change kora jay
/* shoppingCart['mouse']= 15;
console.log(shoppingCart); */

// 3. aro ak vabe keys and value gula change kora jay
/* const propertyPen= 'pen';
shoppingCart[propertyPen]= 26;
console.log(shoppingCart); */

/* var total = shoppingCart;
console.log(total); */



/* var total3= Object.keys(shoppingCart);
console.log(total3); */

/* var total3 =Object.values(shoppingCart);
console.log(total3); */

// 1
/* var total1= shoppingCart.pen;
console.log(total1); */

//2. aita dile just pen er digit ba value dekhabe
/* var total2 = shoppingCart['pen'];
console.log(total2); */


// but aita dile pen er digit and pen er lekha soho 2 ta dekhabe
/* 3.const propertyName= 'pen';
const propertyValue= shoppingCart[propertyName];
console.log(propertyName, propertyValue); */








var friendAge={
    rahim:12,
    samad:45,
    karim: 78,
    jamal:12,
    robi:32,
    kazi:14
}
var all= Object.entries(friendAge);
console.log(all);
