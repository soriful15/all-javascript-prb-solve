const shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
// when you know the property name, use dot notation to get the property values
const penCount1= shoppingCart.pen;


// alternative
// when you know the property name, use dot notation to get the property values

const penCount2=shoppingCart['pen'];
// console.log(penCount2);



const propertyName= 'mouse';
const propertyValue= shoppingCart[propertyName];
// console.log(propertyName, propertyValue);




/* const propertiesKeys = Object.keys(shoppingCart);
console.log(propertiesKeys);
const propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues); */



console.log(shoppingCart);

shoppingCart.mouse= 15;
console.log(shoppingCart);

shoppingCart['mouse']=29;
console.log(shoppingCart);

const propertyName2= 'books';
shoppingCart[propertyName2]=28;
console.log(shoppingCart);
