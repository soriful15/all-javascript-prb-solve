let shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes: 2

}
let keys =Object.keys(shoppingCart);
let values= Object.values(shoppingCart);


for(i=0; i< keys.length; i++){
    let propertyName=keys[i];
    let values= shoppingCart[propertyName];
    console.log(propertyName, values);
}



// for in loop
for(let propertyName in shoppingCart){
    let values= shoppingCart[propertyName];
    // console.log(propertyName,values);
}

