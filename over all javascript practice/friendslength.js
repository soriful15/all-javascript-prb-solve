function bestFriends(friends){
    let friendsLength =''
    for(let i=0; i<friends.length; i++){
        let friendsElement = friends[i];
        if(friendsElement.length> friendsLength.length){
            friendsLength= friendsElement;
        }
    }
    return friendsLength;

}
let allFriends=['shuvo','siam','jowyel', 'ridoy', 'rayhan','istiack'];
let convertLength = bestFriends(allFriends);
console.log(convertLength);