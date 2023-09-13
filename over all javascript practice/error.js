function add (num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        return 'enter your number'
    }
   
    return num1+num2

}
let result =add(12,'45');
console.log(result)

/* 
function add (num1,num2){
    if(num1!== 'number' || num2!=='number'){
        return 'enter your number'
    }
}
console.log(add(12,'45')) */