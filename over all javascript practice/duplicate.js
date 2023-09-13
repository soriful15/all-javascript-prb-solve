let names = ['abul', 'babul', 'cabul', 'dabul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];
function duplicateName(names){
    let uniqeName =[];
    for (let i=0; i<names.length; i++){
        let name = names[i];
        if(uniqeName.includes(name) == false ){
            uniqeName.push(name);
        }
    }
    return uniqeName;
}
console.log(duplicateName(names));




let allNumbers=[12,34,56,78,11,34,78,11,65,23,34];
function duplicateNumber(number){
    let uniqeNumber =[];
    for(let i=0; i<number.length;i++){
        if(uniqeNumber.includes(number[i])=== false){
            uniqeNumber.push(number[i]);
        }
    }
    return uniqeNumber
}
console.log(duplicateNumber(allNumbers));