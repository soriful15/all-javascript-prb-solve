
function getWordReverse(string){
    let words = string.split(' ');
    let result =[];
    for(let i=words.length-1; i>=0;i--){
  let element =words[i];
  result.push(element);
    }
    let reversed= result.join(' ')
  return reversed;
  // console.log(result);
  
  }
  let name1 ='i am a good boy';
  console.log(getWordReverse(name1));