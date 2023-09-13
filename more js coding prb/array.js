let country = 'Bangladesh';
let age =52;
let isIndenpendent = true;
let student ={id:13, class: 11, name:'agun'};
let friends = [13,14,11,17,21,16,15,20];
function add(num1,num2){
    return num1+num2
}
console.log(typeof isIndenpendent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);
console.log(Array.isArray(friends));
console.log(friends.includes(20));
console.log(friends.includes(19));

/* 
let name1 ='shuvo is a good boy';
if(name1.indexOf('shuvo') !==-1){
    console.log('ache')
}
else{
    console.log('nai')
} */


// concat
/* let newAgeFriends = [12,13,11,14];
console.log(friends.concat(newAgeFriends)); */



let newAgeFriends = [12,13,11,14];
let allFriends = newAgeFriends.concat(friends);
console.log(allFriends);


let name1 ='shuvo is a good boy';
console.log(name1.split('.'))

