/* let fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
function getFibo(fibbonacci){
for(let i=2; i<fibbonacci.length;i++){
    let element=fibbonacci[i];
    let 
}
}
console.log(getFibo(fibo)) */

// let fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ];
let fibo=[0,1];
for(let i=2;i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo)