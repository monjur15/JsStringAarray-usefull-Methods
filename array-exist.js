function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;

}
const friends = ['jony', 'david', 'jane', 'leo', 'dany john'];
const myBigBuddy = megaFriend(154);
// console.log(myBigBuddy);

if (friends.indexOf('fox') != -1) {
    console.log('fox exist');
} else {
    console.log('fox doesnt exist');
}
//  using includes
if (friends.includes('leo')) {
    console.log('leo exist using imcludes');
}

// concat 
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const combined = first.concat(second);
console.log(combined);