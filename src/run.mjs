
import readline from 'readline';
import { command_line } from './command_line.mjs';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.on('line', async (line) => {
    let imported = await import('./run_line.mjs');
    let result = await command_line(`node src/run_function.mjs ` + line);
    console.log(result.stdout);
})

