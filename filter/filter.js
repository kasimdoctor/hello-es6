
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

/* Example 1 
    Using traditional for-loop method
*/
var filteredProducts = [];
for (var i = 0; i < products.length; i++ ) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

/* Example 2 
    Using ES6 filter method
*/
var filtered = products.filter(function (product) {
    return product.type === 'fruit';
});
console.log(filtered);
