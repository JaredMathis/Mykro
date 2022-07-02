import readline from 'readline';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.on('line', function(line){
    console.log(line);
})