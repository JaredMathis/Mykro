
import readline from 'readline';
import { command_line } from './command_line.mjs';
import 'colors';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.on('line', async (line) => {
    try {
        let result = await command_line(`node src/run_function.mjs ` + line);
        console.log(result.stdout);
    } catch (e) {
        console.log(e.stack.red);
    }
})

