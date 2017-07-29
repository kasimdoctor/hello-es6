
function* shopping () {
    // stuff on the sidewalk

    // 1. walking down thr sidewalk

    // 2. go into the store with cash
    const stuffFromStore = yield 'cash';

    // 4. walking back home
    return stuffFromStore;
}

// 3. stuff in the store
const gen = shopping();
// console.log( gen.next()); // leaving the hose
// console.log( gen.next('groceries')); // leaving the store

function *foo() {
    console.log('Before 1');
    yield 1;
    console.log('Before 2');    
    yield 2;
    console.log('Before 3');    
    yield 3;
    console.log('Before 4');    
    yield 4;
    console.log('Before 5');    
    yield 5;
}

const it = foo();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

