
function* colors() {
    let h  = yield 'red';
    yield 'blue' + h;
    yield 'green';

    return 'kasim';
}

const gen = colors();
console.log(gen.next());
console.log(gen.next(2));
console.log(gen.next());
console.log(gen.next());

// generators can be used in for..of loops
const colorArray = [];
for(let color of colors()) {
    colorArray.push(color)
}

console.log(colorArray);

console.log('-----------');
// generator recursion
function* numbers() {
    yield 1;
    yield 2;
    yield 3;

    // calls numbers again! (notice the 'yield*')
    yield* numbers();
}

const numIter = numbers();
console.log(numIter.next());
console.log(numIter.next());
console.log(numIter.next());
console.log(numIter.next());
console.log(numIter.next());
