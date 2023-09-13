/* const shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes: 2
} */
// array va objects
var shoppingItems=['books','sunglass','keyboard','mouse','pen','shoes'];
var friendAge=[12,45,78,12,32,14];
var friendAge={
    rahim:12,
    samad:45,
    karim: 78,
    jamal:12,
    robi:32,
    kazi:14
}

const shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes: 2

}
const keys=Object.keys(shoppingCart);
console.log(keys);
const values=Object.values(shoppingCart);
console.log(values);

//  const keys =[ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(i=0; i< keys.length; i++){
    const propertyName= keys[i];
    // console.log(propertyName);
    const propertyValue=shoppingCart[propertyName];
    // console.log(propertyName,propertyValue);
}

// for in loop
for (const propertyName in shoppingCart){
// console.log(propertyName);
const value= shoppingCart[propertyName];
console.log(propertyName,value);

}