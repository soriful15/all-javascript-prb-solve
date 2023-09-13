/* function nameReverse(myName){
    let name='';
    for(let i=myName.length-1;i>=0;i--){
        let nameString= myName[i];
        name= name+nameString;
        console.log(nameString,name);
    }
    return name;
}
let myOrginalName ='Md soriful islam'
console.log(nameReverse(myOrginalName)); */


function nameReverse(myName){
    let name= myName.split(' ');
    let result=[];
   
    for(let i=name.length-1;i>=0;i--){
        let nameString= name[i];
        // name= name+nameString;
        result.push(nameString);
        // console.log(nameString,name);
    }
    let resultJoin= result.join(' ')
    return  resultJoin;
}
let myOrginalName ='Md soriful islam'
console.log(nameReverse(myOrginalName));