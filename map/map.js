var numbers = [1, 2, 3];
var doubledNumbers = [];

/* Example 1 */
// using traditional for loop to create doubled numbers
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

/* Example 2 */
var doubled = numbers.map(function (number) {
    return number * 2;
});
console.log('Doubled ', doubled);

/* Example 3
    Plucking a value from an array and adding it
    into another array.
*/
var cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'EXPENSIVE'}
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);
