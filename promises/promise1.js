
const myPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve();
    }, 5000);
});

myPromise.then(() => {
    console.log('Promise resolved!');
}).catch(() => {
    console.log('Promise rejected!');
})

console.log('This is printed before the promise is resolved!');