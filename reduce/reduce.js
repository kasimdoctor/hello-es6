
var numbers = [ 10, 20, 30 ];

/**
 * Example 1
 * Using traditional for-loop
 */
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);

/**
 * Example 2
 * Using ES6 'reduce'
 */
var reduceSum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log('ES6 Reduce sum:', reduceSum);

/**
 * Example 3
 * Get the color strings from the array of color objects i.e. ['red', 'yellow', 'blue']
 */
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var colors = primaryColors.reduce(function (obj, primaryColor) {
    obj.push(primaryColor.color);
    return obj;
}, []);
console.log(colors);