
const colors = [ 'red', 'green', 'blue' ];

// using regular forEach
colors.forEach((color) => console.log(color));

// using the brand new for..of
console.log('for..of');
for (let color of colors) {
    console.log(color);
}