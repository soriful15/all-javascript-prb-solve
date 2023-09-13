let names = ['abul','babul','cabul','dabul','babul','abul','kabul','gabul','cabul','babul','abul','abul'];


function removeDuplicate(names){
    let uniqe =[];
    for(let i=0; i<names.length; i++){
        let name = names[i];
        // console.log(name);
        if(uniqe.includes(name)=== false){
            uniqe.push(name);
        }
    }
    return uniqe;
}
let uniqueNames= removeDuplicate(names);
console.log(uniqueNames);