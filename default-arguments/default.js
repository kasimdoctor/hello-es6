
// function WITHOUT default arguments
function makeAjaxRequest(url, method) {
    
    // if 'method' is not specified
    if (!method) {
        method = 'GET';
    }
    console.log('WITHOUT default:', method);

}

// example invocation
makeAjaxRequest('google.com');

// normal invocation
makeAjaxRequest('google.com', 'POST');

function makeAjaxRequestDefaultArgument(url, method = 'GET') {
    console.log('WITH default:', method);
}

// example
makeAjaxRequestDefaultArgument('google.com');

// does not work when 'null' is passed
makeAjaxRequestDefaultArgument('yahoo.com', null);

function testArgs(...myArgs) {
    console.log(myArgs);
    console.log(...myArgs);
    secondTest(...myArgs);
}

function secondTest(a, b) {
    console.log(a);
    console.log(b);
}

testArgs(1, 2, 3);