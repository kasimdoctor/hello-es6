const myObj = {
    name: 'Kasim',
    age: 27
};

console.log(myObj);

// Every Object has a private property called 'Prototype'
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myObj)));

function car() {
    this.wheelCount = 4;
}

const audi = new car();
console.log(typeof audi);