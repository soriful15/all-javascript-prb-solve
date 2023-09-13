// let numbers=[45,65,23,98,19];
// for(let i=0;i<numbers.length;i++){
//     let number=numbers[i];
//     console.log(number)
// }



// for of loop
let numbers=[45,60,23,98,19];
for(let number of numbers){
    console.log(number)
}


let products =[
    {id:1 ,name:'xiami Phone one night',price:19000},
    {id:2,name:'iphone ',price:19000},
    {id:3,name:'mac book air',price:19000},
    {id:4,name:' lenovo yoga laptop 2025',price:19000},
    {id:5,name:'dell inspiron laptop',price:19000},
    {id:6,name:'samsung phone note 7',price:19000},
    {id:7,name:'nokia old age phone age',price:19000},
    {id:8,name:'phone one',price:19000},
    {id:8,name:'LapTop',price:19000}
];
// for(let product of products){
//     console.log(product);
// }

function matchProducts (products,search){
    let matched=[];
    for(let product of products){
    
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
let result= matchProducts(products,'laptop');
console.log(result);