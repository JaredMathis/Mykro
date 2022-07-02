import readline from 'readline';
import {file_list} from './file_list.mjs'
import { path_file_name } from './path_file_name.mjs';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

let directory = './src';

rl.on('line', function(line) {
    let tokens = line.split(' ');
    let first = tokens[0];
    let files = Array.from(file_list(directory));
    let mapped = files.map(f => path_file_name(f));
    if (mapped.includes(first)) {
        
    }
})