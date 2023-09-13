function getSmall(number){
    let small =number[0];
    for(let i=0; i<number.length;i++){
        let element=number[i];
        if(element<small){
            small=element
        }
    }
    return small
}
let num =[23,65,32,14,87,43,42,90];
console.log(getSmall(num));