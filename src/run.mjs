
import readline from 'readline';
import { run_line } from './run_line.mjs';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.on('line', async (line) => {
    run_line(line);
})

let directory = './src';

