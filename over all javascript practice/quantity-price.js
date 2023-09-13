let shoppingCart =[
    {name:'shoe',price:1200,quantity:2},
    {name:'shirt',price:2200,quantity:5},
    {name:'pant',price:3700,quantity:4},
    {name:'belt',price:600,quantity:3},
];
function quantityAll(quantity1){
    let allQuantity = 0;
    for(let i=0;i<quantity1.length; i++){
        let element = quantity1[i];
    let perPrice = element.price* element.quantity;
    allQuantity= allQuantity+ perPrice;
    }
    return allQuantity;
}
console.log(quantityAll(shoppingCart));