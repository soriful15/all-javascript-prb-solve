// jim er jonn
/* let jim =85;
let dela = 75;
if(jim>dela){
    console.log('jim cake ta pabe')
}
else{
    console.log('dela cake ta pabe')
} */

// dela er jonno
/* let jim =69;
let dela = 97;
if(jim>dela){
    console.log('jim cake ta pabe')
}
else{
    console.log('dela cake ta pabe')
} */





// akhon 3 person er sathe tuluna
/* let jim = 84;
let dela = 99;
let chinku= 77;
if( jim> dela && jim> chinku){
    console.log('jim cake ta pabe')
}
else if(dela> jim && dela> chinku){
    console.log('dela cake ta pabe')
}
else{
    console.log('chinku cake ta pabe')
} */


//......................... max with...................................


/* function getMax(jim,dela,chinku){
 let allResult= Math.max(jim,dela,chinku)
 return allResult;
}
let result1 = 84;
let result2 = 99;
let result3= 77;
console.log(getMax(result1,result2,result3)); */



//......................... min with...................................


/* function getMax(jim,dela,chinku){
 let allResult= Math.min(jim,dela,chinku)
 return allResult;
}
let result1 = 84;
let result2 = 99;
let result3= 77;
console.log(getMax(result1,result2,result3)); */



// max min 2 ta ak sathe..........
function getResult(number1,number2,number3){
    let maxResult= Math.max(number1,number2,number3)
    let minResult=Math.min( number1,number2,number3)
    return[maxResult,minResult];
}

let result1 = 84;
let result2 = 99;
let result3= 77;
console.log(getResult(result1,result2,result3));






//  if else diye
/* let number11 = 79
let number12= 49
let number13=100
    let allResult = Math.max(number11,number12,number13);
    if(number11>= allResult){
        console.log('number11 cake pabe')
    }
   else if(number12>= allResult){
        console.log('number12 cake pabe')
    }
    else{
        console.log('number13 cake nibe')
    }
 */



//   function er vitor diye
      function getAllResult(number11,number12,number13){
        let allResult = Math.max(number11,number12,number13);
        if(number11>= allResult){
            return allResult;
        }
       else if(number12>= allResult){
            console.log('number12 cake pabe')
            return allResult
        }
        else{
            console.log('number13 cake nibe')
            return allResult
        }
      }

        let number31 = 79
        let number32= 49
        let number33=100
        console.log(getAllResult(number31,number32,number33))