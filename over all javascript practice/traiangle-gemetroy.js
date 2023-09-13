function traiangleArea(silde1,slide2,slide3){
let s= (silde1+slide2+slide3)/2;
let area =(s*(s-silde1)*(s-slide2)*(s-slide3));
let allArea= Math.sqrt(area);
return allArea.toFixed(2);
}
let silde1= 7;
let slide2 =6;
let slide3=5;
console.log(traiangleArea(silde1,slide2,slide3));