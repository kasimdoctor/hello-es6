
var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];

/**
 * Example 1
 * Using traditional for-loop
 */
var user;
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}
console.log(user);

/**
 * Example 2
 * Using ES6 'find'
 */
var foundUser = users.find(function (user) {
    return user.name === 'Alex';
});
console.log('ES6 find:', foundUser);

