// interactiveProgram.js
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter a number: ', (input) => {
//     const a = Number(input);
//     rl.close();
// });




let fn = 0;
let ctr = 16;
while(fn != ctr){
    setTimeout(()=>{
        fn = Math.floor(Math.random()*100)+1;
        console.log('not happened');
    },2000);
}
console.log('yippe');