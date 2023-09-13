function bestFriend(name1, name2) {
    if (name1.frend === name2.name && name1.name===name2.frend) {
        return true
    }
    else {
        return false
    }
}
let friend1 = { name: 'shuvo', frend: 'siam' }
let friend2 = { name: 'siam', frend: 'shuvo' }
let allFriend = bestFriend(friend1, friend2)
console.log(allFriend);