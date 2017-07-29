const expense = {
    type: 'Business',
    amount: 100
};

// Traditional ES5
// var type = expense.type;
// var amount = expense.amount
// console.log(`Expense type is ${type} and amount is ${amount}`);

// ES6
const { type, amount } = expense;
console.log(`Expense type is ${type} and amount is ${amount}`);

/**
 * Example 2
 */
// Destructuring nested properties
const expense_2 = {
  eating: 50,
  travel: {
    flying: 200,
    driving: 50
  }
};

const { eating, travel: { flying, driving } } = expense_2;
console.log(`Flying cost ${flying} and Driving cost ${driving} and eating cost ${eating}`);

/**
 * Example 3
 * Destructuring an array
 */
const companies = [ 'Apple', 'Facebook', 'Microsoft' ];

const [ name, name2, name3 ] = companies;
console.log(name);
console.log(name2);
console.log(name3);

