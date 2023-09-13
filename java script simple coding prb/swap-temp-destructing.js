/* ........................swap and tem approach number 1 */
let first = 5;
let second = 7;
console.log(first,second);


let temp =first;
first=second;
second=temp;
console.log(first,second);
/* .................. destructing approach 2........................... */

let first1 = 10;
let second2 = 17;
console.log(first1,second2);
 
[first1,second2]=[second2,first1]
console.log(first1,second2);