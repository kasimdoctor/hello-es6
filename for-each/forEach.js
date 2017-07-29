/* Example 1 */
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// using the forEach helper from ES6
colors.forEach((color) => {
    console.log(color);
});

/* Example 2 */

// create an array of numbers
var numbers = [1,2,3,4,5];

// create a variable to hold sum
var sum = 0;

// Loop pver the array, incrementing the sum
numbers.forEach((number) => {
    sum = sum + number;
});

// Print the sum
console.log('The sum is: ', sum);