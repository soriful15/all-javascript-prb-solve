/* ......................Math pow.................. */
let result = Math.pow(2, 3)
// console.log(result);


let number =5;
let result1 =Math.pow(number, 2)
// console.log(result1);


/* ......................Math abbs..................... */
/* let  number1 = 25;
let number2 =45;
let gap =number1-number2;
if(gap < 5){
    console.log('you are my friend');
}
else{
    console.log('you are my not friend')
} */

let  number1 = 25;
let number2 =45;
let gap =Math.abs(number1-number2) 
if(gap < 5){
    console.log('you are my friend');
}
else{
    console.log('you are my not friend')
}



/* ......................Math round..................... */

let num = 3.66;
let fullNumber = Math.round(num);
console.log(fullNumber);


/* ......................Math ceil..................... */
let num11=7.35;
let fullNum11 = Math.ceil(num11);
console.log(fullNum11);

/* ......................Math floor..................... */

let num12 = 3.99;
let fullNum12=Math.floor(num12);
console.log(fullNum12);


/* ......................random..................... */

// console.log(Math.random());
let random= Math.random()*100;
console.log(random);

/* math round and random */

/* let random1= Math.round(Math.random()*6);
console.log(random1);
 */

/* ......................round random. for loop er vitor diye use korbo.................... */
for(let i=0; i<20;i++){
    let random2= Math.round(Math.random()*6);
    console.log(random2);
}