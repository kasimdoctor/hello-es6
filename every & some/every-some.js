var computers = [
    { name: 'Apple', ram: 2 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

/**
 * Example 1
 * Using tradition for-loop
 * Q: Are there any computers that have more than 16 gigs of ram?
 */

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

/**
 * Example 2
 */

var everyComputerCanRunProgram = computers.every((computer) => {
    return computer.ram > 16;
});

console.log('ES6 EveryComputerCanRun:', everyComputerCanRunProgram);

var someComputersCanRunProgram = computers.some((computer) => {
    return computer.ram > 16;
});

console.log('ES6 SomeComputerCanRun:', someComputersCanRunProgram);

