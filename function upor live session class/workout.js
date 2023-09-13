/* function workout(workoutName){
    let bicaPworkout= ['shuvo','rimi'];
    let chestWorkOut =['shuvo','nishu'];
    let tryWorkOut =['shuvo','juti'];
    if(workoutName=== 'bicap'){
        return bicaPworkout;
    }
    else if(workoutName=== 'chest'){
        return chestWorkOut;
    }
    else if(workoutName=== 'try'){
        return tryWorkOut;
    }
    else{
        console.log('nothing')
    }

}
let allWorkOutName = workout('bicap')
console.log(allWorkOutName); */




function getWay(name){
    let shuvo1=['a','b']
    let shuvo2=['c','d']
    let shuvo3=['e','f']
    if(name === 'soriful'){
        return shuvo1
    }
    else if(name ==='melon'){
        return shuvo2
    }
    else if(name==='akhi') {
        return shuvo3
    }
    else{
    //   console.log('nothing')
    return 'nothing'
    }
}
console.log(getWay('melon'));