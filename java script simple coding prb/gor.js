function getWordReverse(string){
    let result = 0;
    for(let i = 0; i<string.length;i++){
  let element =string[i];
  result= result + element;
    }
  return result;
  
  }
  let name1 =[1,2,3,4,5,6,7,8];
  console.log(getWordReverse(name1));