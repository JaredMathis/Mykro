import readline from 'readline';
import {file_list} from './file_list.mjs'

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

let directory = './src';

rl.on('line', function(line) {
    let tokens = line.split(' ');
    let files = Array.from(file_list(directory));
    console.log(files)
})