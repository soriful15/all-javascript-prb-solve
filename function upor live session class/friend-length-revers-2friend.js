/* function reverseFriend(nameOne,nameTwo){
let  oneFriendLength = nameOne.length;
let twoFriendLength = nameTwo.length;
if(oneFriendLength>twoFriendLength){
    return nameOne.split('').reverse().join('');
}
else{
    return nameTwo.split('').reverse().join('');
}
}
let friend1='shuvo';
let friend2= 'alexis';
let allFriend= reverseFriend(friend1,friend2);
console.log(allFriend) */



// 1.......
/* function friendReverse(oneFriend,twoFriend){
    let friendLength1= oneFriend.length;
    let friendLength2 = twoFriend.length;
    if(friendLength1>friendLength2){
        return oneFriend.split('').reverse().join('')
    }
    else{
        return twoFriend.split('').reverse().join('')
    }

}
let friend1= 'shuvo';
let friend2 ='sorifulislam';
let allFriend=friendReverse(friend1,friend2);
console.log(allFriend);
 */
// 2.....
/* let str='sorifulislam';
let name1='' ;
for(let i=str.length-1;i>=0;i--){
    let element= str[i];
    name1=name1+element;
    console.log(name1);
}
 */

// akhon upor 1 and 2 ta ak sathe jog kore amra je jinis ta pai
function friendReverse(oneFriend, twoFriend) {
    let friendName = ''
    let friendLength1 = oneFriend.length;
    let friendLength2 = twoFriend.length;
    if (friendLength1 > friendLength2) {
        friendName = oneFriend
    }
    else {
        friendName = twoFriend
    }
    let str='sorifulislam';
    let name1 = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let element = str[i];
        name1 = name1 + element;
        // console.log(name1);

    }
    return name1;
}
let friend1 = 'shuvo';
let friend2 = 'sorifulislam';
let allFriend = friendReverse(friend1, friend2);
console.log(allFriend);

