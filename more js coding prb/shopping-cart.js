let shoppingCart =[
    {name:'shoe',price:1200},
    {name:'shirt',price:2200},
    {name:'pant',price:3700},
    {name:'belt',price:600}
]
function totalCost(products){
    let sum =0;
    for(let i=0;i<products.length;i++){
        let product = products[i];
        // console.log(product);
        sum= sum+ product.price
    }
    return sum;
}
let expense = totalCost(shoppingCart);
console.log('total expense today',expense);
/* let phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 15, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 100, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'oppo', camera: 50, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'nokia', camera: 8, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'HTC', camera: 116, storage: '32gb', price: 62000, color: 'silver' }
 ];
 function cameraSize(size) {
    let smallCamera = 0;
    for (let i = 0; i < size.length; i++) {
       let camera1 = size[i];
       smallCamera = smallCamera+ camera1.price;
     
    }
    return smallCamera;
 }
 let allCamera = cameraSize(phones);
 console.log(allCamera); */
