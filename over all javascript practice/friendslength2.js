let human= {
    name : 'shuvo',
    friends : ['shuvo','siam'],
    age: 25,
    country: 'bd' 
}
function friendsall(all){
    for( let i=0;i<all.friends.length;i++){
        let element = all.friends[i];
        console.log(element);
    }
  
}
friendsall(human);