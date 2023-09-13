let shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes: 2

}

let object1 =Object.keys(shoppingCart);
let object2 =Object.values(shoppingCart);
for(let i=0;i<object1.length;i++){
    let propertyName= object1[i];
    let object2= shoppingCart[propertyName];
    console.log(propertyName ,object2);
}