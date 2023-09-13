
// just reverse kora hoise
 function friendsReverse(friends) {
    let friendBig = []
    for (let i = friends.length-1; i>=0; i--) {
        let element = friends[i];
       friendBig.push(element);
        
    }
    return friendBig;
}
let friendsList = ['shuvo', 'soriful', 'sorifulIslam'];
console.log(friendsReverse(friendsList)); 









