// interactiveProgram.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    const a = Number(input);
    rl.close();
});

console.log(a);