/* let names = ['abul', 'babul', 'cabul', 'dabul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];
function removeDuplicate(names) {
    let uniqe = [];
    for (let i = 0; i < names.length; i++) {
        let index = i;
        let name = names[i];
        if (uniqe.includes(name) === false) {
            uniqe.push(name);
        }
    }
    return uniqe;
}
let uniqNames = removeDuplicate(names);
console.log(uniqNames); */


function removeNumber(numbers){
    let uniqeNamer =[];
    for(let i=0; i<numbers.length; i++){
        let number =numbers[i];
        if(uniqeNamer.includes(number) === false){
            uniqeNamer.push(number);
        }
    }
    return uniqeNamer;
}

let allNumbers=[12,34,56,78,11,34,78,11,65,23,34];
let perfectNamber = removeNumber(allNumbers);
console.log(perfectNamber);
