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


for( i=0; i< keys.length; i++){
    const propertyName= keys[i];
    // console.log(propertyName); aita upor ma dekhar jonno
    const values= shoppingCart[propertyName];
    // console.log(propertyName,values);
}

// for in loop

for(const propertyName in shoppingCart){
    const values= shoppingCart[propertyName];
    console.log(propertyName,values);
}